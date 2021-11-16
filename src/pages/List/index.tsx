import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Content, Filters } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import { gains, expenses } from '../../repositories'
import { formatDateBR, formatCurrencyBRL } from '../../utils/index'

interface ICardFinanceData {
    id: number
    description: string
    amountFormatted: string
    frequency: string
    dateFormatted: string
    tagColor: string
}

interface IDateOptionSelect {
    value: number
    label: string
}

const List:React.FC = () => {
    const { type } = useParams()    
    const listData = useMemo(() => type === 'entry-balance' ? gains : expenses, [type])
    const [ listCardFinanceData, setListCardFinanceData ] = useState<ICardFinanceData[]>([])

    const headerInfo = useMemo(() => type === 'entry-balance' 
        ? {title: 'Entradas', lineColor: '#F7931B'}
        : {title: 'Saídas', lineColor: '#E44C4E'}
    , [type])


    const [ monthOptions, setMonthOptions ] = useState<IDateOptionSelect[]>([])
    const [ yearOptions, setYearOptions ] = useState<IDateOptionSelect[]>([])

    const dateDefault = useMemo(() => new Date(
        listData.reduce((acc, e) => acc < e.date ? e.date : acc, '')
    ), [listData])
              
    const [ monthOptionSelected, setMonthOptionSelected ] = useState<number>(dateDefault.getMonth() + 1)
    const [ yearOptionSelected, setYearOptionSelected ] = useState<number>(dateDefault.getFullYear())


    const updateMonthAndYearOptions = () => {
        const uniqueYears = listData.reduce((acc, item) => {
            const year = new Date(item.date).getFullYear()
            return acc.find(({value}) => value === year) ? acc : [...acc, {value:year, label:year}]
        }, [] as any[])

        const uniqueYearsDesc = uniqueYears.sort((a, b) => b.value - a.value)

        setYearOptions(uniqueYearsDesc)


        const monthsInYear:number[] = listData
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

        setMonthOptions(optionMonths)
    }
    useEffect(updateMonthAndYearOptions, [yearOptionSelected])

    
    const filterCardFinanceByDate = () => {
        const month = `${monthOptionSelected}`.padStart(2, '0')

        const newListCardFinanceData = listData
            .filter(item => item.date.includes(`${yearOptionSelected}-${month}`))
            .map((item, idx) => ({
                id: idx + 1,
                description: item.description,
                amountFormatted: formatCurrencyBRL(+item.amount),
                dateFormatted: formatDateBR(item.date),
                frequency: item.frequency,
                tagColor: item.frequency === 'eventual' ? '#E44C4E' : '#4E41F0'
            }))
        setListCardFinanceData(newListCardFinanceData)
    }
    useEffect(filterCardFinanceByDate, [monthOptionSelected, yearOptionSelected])


    return (
        <Container>
            <ContentHeader title={headerInfo.title} lineColor={headerInfo.lineColor}>
                <SelectInput options={monthOptions} onChange={ev => setMonthOptionSelected(+ev.target.value)} />
                <SelectInput options={yearOptions} onChange={ev => setYearOptionSelected(+ev.target.value)}  />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-recurrent">Recorrentes</button>
                <button type="button" className="tag-eventual">Eventuais</button>
            </Filters>

            <Content>
                <ul>
                    {listCardFinanceData.map(item => (
                        <HistoryFinanceCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))}
                </ul>
            </Content>
        </Container>
    )
}

export default List