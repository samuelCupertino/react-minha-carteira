import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Content, Filters } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import { gains, expenses } from '../../repositories'
import { formatDateBR, formatCurrencyBRL } from '../../utils/index'


interface IData {
    id: number
    description: string
    amountFormatted: string
    frequency: string
    dateFormatted: string
    tagColor: string
}
const List:React.FC= () => {
    const [ data, setData ] = useState<IData[]>([])
    const { type } = useParams()

    const listInfo = useMemo(() => type === 'entry-balance' 
        ? {title: 'Entradas', lineColor: '#F7931B'}
        : {title: 'Saídas', lineColor: '#E44C4E'}
    , [type])

    const listData = useMemo(() => type === 'entry-balance' ? gains : expenses, [type])
    
    
    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' }
    ]

    const years = [
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 }
    ]


    useEffect(() => {
        const newData = listData.map((item, idx) => ({
            id: idx + 1,
            description: item.description,
            amountFormatted: formatCurrencyBRL(+item.amount),
            dateFormatted: formatDateBR(item.date),
            frequency: item.frequency,
            tagColor: item.frequency === 'eventual' ? '#E44C4E' : '#4E41F0'
        }))
        setData(newData)
    }, [])


    return (
        <Container>
            <ContentHeader title={listInfo.title} lineColor={listInfo.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-recurrent">Recorrentes</button>
                <button type="button" className="tag-eventual">Eventuais</button>
            </Filters>

            <Content>
                <ul>
                    {data.map(item => (
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