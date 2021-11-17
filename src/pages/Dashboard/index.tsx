import { useState, useMemo, useEffect } from 'react'


import { Container, Content } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/walletBox'
import MessageBox from '../../components/MessageBox'


import { gains, expenses } from '../../repositories'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

interface IDateOptionSelect {
    value: number
    label: string | number
}

const Dashboard:React.FC = () => {
    const transactions = useMemo(() => [...gains, ...expenses], [])

    const [ monthOptions, setMonthOptions ] = useState<IDateOptionSelect[]>([])
    const [ yearOptions, setYearOptions ] = useState<IDateOptionSelect[]>([])

    const dateDefault = useMemo(() => new Date(
        transactions.reduce((acc, e) => acc < e.date ? e.date : acc, '')
    ), [transactions])

    const [ monthOptionSelected, setMonthOptionSelected ] = useState<number>(dateDefault.getMonth() + 1)
    const [ yearOptionSelected, setYearOptionSelected ] = useState<number>(dateDefault.getFullYear())

    const updateMonthAndYearOptions = () => {
        const uniqueYears = transactions.reduce((acc, item) => {
            const year = new Date(item.date).getFullYear()
            return acc.find(({value}) => value === year) ? acc : [...acc, {value:year, label:year}]
        }, [] as IDateOptionSelect[])
        
        const uniqueYearsDesc = uniqueYears.sort((a, b) => b.value - a.value)

        setYearOptions(uniqueYearsDesc)

        const monthsInYear:number[] = transactions
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


    const calcTotalAmountByDate = (collection:any[]) => {
        const monthZerroFill = `${monthOptionSelected}`.padStart(2, '0')
        const collectionInMonth = collection.filter(({date}) => date.includes(`${yearOptionSelected}-${monthZerroFill}-`))
        const totalCollection = collectionInMonth.reduce((acc, item) => acc + (+item.amount), 0)
        return totalCollection
    }
    const totalGains = useMemo(() => calcTotalAmountByDate(gains), [monthOptionSelected, yearOptionSelected])
    const totalExpenses = useMemo(() => calcTotalAmountByDate(expenses), [monthOptionSelected, yearOptionSelected])
    const totalBalance = useMemo(() => totalGains - totalExpenses, [totalGains, totalExpenses])


    const messageBox = useMemo(() => {
        const messages = {
            negative: {
                title: 'Que triste!',
                description: 'Neste mês, você gastou mais que deveria.',
                footerText: 'Verifique os seus gastos e tente cortar algumas coisas desnecessárias.',
                icon: sadImg
            },
            warning: {
                title: 'Ufaa!',
                description: 'Neste mês, vocÊ gastou extamente o que ganhou.',
                footerText: 'Tenha cuidado e tente poupar no próximo mês.',
                icon: grinningImg
            },
            positive: {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva.',
                footerText: 'Continue assim. Considere investir o seu saldo.',
                icon: happyImg
            }
        }
        const status = totalBalance < 0 ? 'negative' : totalBalance == 0 ? 'warning' : 'positive'
        
        return messages[status]
    }, [totalBalance])


    return (
        <Container>
            <ContentHeader title="Dashboard" varColor="--info">
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

            <Content>
                <WalletBox 
                    title="Saldo"
                    amount={totalBalance}
                    description="atualizado com base nas entradas e saídas."
                    varColor="--info"
                    icon="dollar"
                />
                <WalletBox 
                    title="Entradas"
                    amount={totalGains}
                    description="uma descricao"
                    varColor="--success"
                    icon="arrowUp"
                />
                <WalletBox 
                    title="Saídas"
                    amount={totalExpenses}
                    description="uma descricao"
                    varColor="--warning"
                    icon="arrowDown"
                />

                <MessageBox 
                    title={messageBox.title}
                    description={messageBox.description}
                    footerText={messageBox.footerText}
                    icon={messageBox.icon}
                />
            </Content>
        </Container>
    )
}

export default Dashboard