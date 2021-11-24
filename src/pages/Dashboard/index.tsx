import { useState, useMemo, useEffect, useCallback } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/walletBox'
import MessageBox from '../../components/MessageBox'
import PieChartBox from '../../components/PieChartBox'
import LineChartBox from '../../components/LineChartBox'
import BarChartBox from '../../components/BarChartBox'

import { gains, expenses } from '../../repositories'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

import { Container, Content } from './style'
interface IDateOptionSelect {
    value: number
    label: string | number
}

const Dashboard:React.FC = () => {
    const calcTotalAmountByDate = useCallback((
        collection:Record<string, any>[], year:number, month:number
    ) => {
        const monthZeroFill = `${month}`.padStart(2, '0')
        const collectionInMonth = collection.filter(({date}) => date.includes(`${year}-${monthZeroFill}-`))
        return collectionInMonth.reduce((acc, item) => acc + (+item.amount), 0)
    }, [])

    const calcRecurrentAndEventualByDate = useCallback((
        collection:Record<string, number|string>[], year:number, month:number
    ) => {
        const collectionRecurrent = collection.filter(({frequency}) => frequency === 'recurrent')
        const collectionEventual = collection.filter(({frequency}) =>  frequency === 'eventual')

        const amountRecurrent = calcTotalAmountByDate(collectionRecurrent, year, month)
        const amountEventual = calcTotalAmountByDate(collectionEventual, year, month)
        const total = amountRecurrent + amountEventual

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: +(amountRecurrent / total * 100).toFixed(2) || 0,
                varColor: '--info'
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: +(amountEventual / total * 100).toFixed(2) || 0,
                varColor: '--warning'
            }
        ]
    }, [calcTotalAmountByDate])


    const transactions = useMemo(() => [...gains, ...expenses], [])

    const [ monthOptions, setMonthOptions ] = useState<IDateOptionSelect[]>([])
    const [ yearOptions, setYearOptions ] = useState<IDateOptionSelect[]>([])

    const dateDefault = useMemo(() => new Date(
        transactions.reduce((acc, e) => acc < e.date ? e.date : acc, '')
    ), [])

    const [ monthOptionSelected, setMonthOptionSelected ] = useState<number>(dateDefault.getMonth() + 1)
    const [ yearOptionSelected, setYearOptionSelected ] = useState<number>(dateDefault.getFullYear())

    const totalGains = useMemo(() => 
        calcTotalAmountByDate(gains, yearOptionSelected, monthOptionSelected)
    , [calcTotalAmountByDate, yearOptionSelected, monthOptionSelected])

    const totalExpenses = useMemo(() => 
        calcTotalAmountByDate(expenses, yearOptionSelected, monthOptionSelected)
    , [calcTotalAmountByDate, yearOptionSelected, monthOptionSelected])

    const totalBalance = useMemo(() => 
        totalGains - totalExpenses
    , [totalGains, totalExpenses])


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
        const status = totalBalance < 0 ? 'negative' : totalBalance === 0 ? 'warning' : 'positive'
        
        return messages[status]
    }, [totalBalance])


    const pieChartGainsAndExpenses = useMemo(() => {
        const total = totalGains + totalExpenses
        const percentGains = totalGains / total * 100
        const percentExpenses = totalExpenses / total * 100

        return [
            { 
                name: 'Entradas',
                value: totalGains,
                percent: +percentGains.toFixed(2) || 0,
                varColor: '--info'
            },
            { 
                name: 'Saídas',
                value: totalExpenses,
                percent: +percentExpenses.toFixed(2) || 0,
                varColor: '--warning'
            }
        ]
    }, [totalGains, totalExpenses])

    const lineChartHistoricYear = useMemo(() => {
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        
        return months.reduce((acc, month, i) => {
            const monthNum = i + 1
            const amountEntry = calcTotalAmountByDate(gains, yearOptionSelected, monthNum)
            const amountOutput = calcTotalAmountByDate(expenses, yearOptionSelected, monthNum)

            return amountEntry || amountOutput ? [...acc, { month, amountEntry, amountOutput }] : acc
        }, [] as any[])

    }, [calcTotalAmountByDate, yearOptionSelected])

    const barChartGainsRecurrentAndEventual = useMemo(() => 
        calcRecurrentAndEventualByDate(gains, yearOptionSelected, monthOptionSelected)
    , [calcRecurrentAndEventualByDate, yearOptionSelected, monthOptionSelected])

    const barChartExpensesRecurrentAndEventual = useMemo(() => 
        calcRecurrentAndEventualByDate(expenses, yearOptionSelected, monthOptionSelected)
    , [calcRecurrentAndEventualByDate, yearOptionSelected, monthOptionSelected])


    useEffect(() => {
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
    }, [transactions, yearOptionSelected])

    
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

                <PieChartBox data={pieChartGainsAndExpenses} /> 

                <LineChartBox data={lineChartHistoricYear} varColorEntry="--info" varColorOutput="--warning"/>


                <BarChartBox title="Entradas" data={barChartGainsRecurrentAndEventual} />
                <BarChartBox title="Saídas" data={barChartExpensesRecurrentAndEventual} />
            </Content>

        </Container>
    )
}

export default Dashboard