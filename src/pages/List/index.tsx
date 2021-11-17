import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Content, Filters } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import { gains, expenses } from '../../repositories'
import { formatDateBR, formatCurrencyBRL } from '../../utils/index'

interface ICardFinanceData {
    key: number
    title: string
    amount: string
    frequency: string
    date: string
    tagVarColor: string
}

interface IDateOptionSelect {
    value: number
    label: string | number
}

const List:React.FC = () => {
    const { type: transactionType } = useParams()    
    
    const pageData = useMemo(() => transactionType === 'entry-balance' 
        ? {title: 'Entradas', varColor: '--success', transactions: gains}
        : {title: 'Saídas', varColor: '--warning', transactions: expenses}
    , [transactionType])


    const [ listCardFinanceData, setListCardFinanceData ] = useState<ICardFinanceData[]>([])
    const [ frequenciesSelected, setFrequenciesSelected ] = useState(['recurrent', 'eventual'])

    const [ monthOptions, setMonthOptions ] = useState<IDateOptionSelect[]>([])
    const [ yearOptions, setYearOptions ] = useState<IDateOptionSelect[]>([])

    const dateDefault = useMemo(() => new Date(
        pageData.transactions.reduce((acc, e) => acc < e.date ? e.date : acc, '')
    ), [pageData.transactions])

    const [ monthOptionSelected, setMonthOptionSelected ] = useState<number>(dateDefault.getMonth() + 1)
    const [ yearOptionSelected, setYearOptionSelected ] = useState<number>(dateDefault.getFullYear())

    
    const updateMonthAndYearOptions = () => {
        const uniqueYears = pageData.transactions.reduce((acc, item) => {
            const year = new Date(item.date).getFullYear()
            return acc.find(({value}) => value === year) ? acc : [...acc, {value:year, label:year}]
        }, [] as IDateOptionSelect[])
        
        const uniqueYearsDesc = uniqueYears.sort((a, b) => b.value - a.value)

        setYearOptions(uniqueYearsDesc)

        const monthsInYear:number[] = pageData.transactions
            .filter(({date}) => date.includes(`${yearOptionSelected}-`))
            .reduce((acc, item) => {
                const month = new Date(item.date).getMonth() + 1
                return acc.includes(month) ? acc : [...acc, month]
            }, [] as number[])
            
        const allMonths = [
            {value: 1, label: 'Janeiro'},
            {value: 2, label: 'Fevereiro'},
            {value: 3, label: 'Março'},
            {value: 4, label: 'Abril'},
            {value: 5, label: 'Maio'},
            {value: 6, label: 'Junho'},
            {value: 7, label: 'Julho'},
            {value: 8, label: 'Agosto'},
            {value: 9, label: 'Setembro'},
            {value: 10, label: 'Outubro'},
            {value: 11, label: 'Novembro'},
            {value: 12, label: 'Dezembro'}
        ]

        const optionMonths = allMonths.filter(({value}) => monthsInYear.includes(value))
        const monthDefault = Math.max(...monthsInYear)

        setMonthOptions(optionMonths)
        setMonthOptionSelected(monthDefault)
    }
    useEffect(updateMonthAndYearOptions, [yearOptionSelected])


    const filterCardFinanceByDate = () => {
        const month = `${monthOptionSelected}`.padStart(2, '0')

        const newListCardFinanceData = pageData.transactions
            .filter(({date}) => date.includes(`${yearOptionSelected}-${month}-`))
            .filter(({frequency}) => frequenciesSelected.includes(frequency))
            .map((item, idx) => ({
                key: idx + 1,
                title: item.description,
                date: formatDateBR(item.date),
                amount: formatCurrencyBRL(+item.amount),
                frequency: item.frequency,
                tagVarColor: item.frequency === 'eventual' ? '--warning' : '--success'
            }))
        setListCardFinanceData(newListCardFinanceData)
    }
    useEffect(filterCardFinanceByDate, [monthOptionSelected, yearOptionSelected, frequenciesSelected])

    
    const handleFrequency = (frequency:string) => {
        const newFrequencies = frequenciesSelected.includes(frequency) 
            ? frequenciesSelected.filter(freq => freq !== frequency)
            : [...frequenciesSelected, frequency]
        
        if(newFrequencies.length > 0)
            setFrequenciesSelected(newFrequencies)
    }

    return (
        <Container>
            <ContentHeader title={pageData.title} varColor={pageData.varColor}>
                <SelectInput 
                    options={monthOptions} 
                    valueSelected={monthOptionSelected} 
                    onChange={ev => setMonthOptionSelected(+ev.target.value)} 
                />
                <SelectInput 
                    options={yearOptions} 
                    valueSelected={yearOptionSelected} 
                    onChange={ev => setYearOptionSelected(+ev.target.value)} 
                />
            </ContentHeader>

            <Filters>
                <button 
                    type="button" 
                    className={`tag-recurrent ${frequenciesSelected.includes('recurrent') && 'active'}`} 
                    onClick={() => handleFrequency('recurrent')}
                > Recorrentes </button>

                <button 
                    type="button" 
                    className={`tag-eventual ${frequenciesSelected.includes('eventual') && 'active'}`} 
                    onClick={() => handleFrequency('eventual')}
                > Eventuais </button>
            </Filters>

            <Content>
                {listCardFinanceData.map(props => ( <HistoryFinanceCard {...props}/> ))}
            </Content>
        </Container>
    )
}

export default List