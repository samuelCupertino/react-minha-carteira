import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Content, Filters } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

import { gains, expenses } from '../../repositories'

const List:React.FC= () => {
    const { type } = useParams()

    const listInfo = useMemo(() => type === 'entry-balance' 
        ? {title: 'Entradas', lineColor: '#F7931B'}
        : {title: 'Saídas', lineColor: '#E44C4E'}
    , [type])

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
                    {[...Array(30)].map(() => (
                        <HistoryFinanceCard 
                            title="Salário"
                            subtitle="20/10/2020"
                            amount="R$ 1.000,00"
                            tagColor="#E44C4E"
                        />
                    ))}
                </ul>
            </Content>
        </Container>
    )
}

export default List