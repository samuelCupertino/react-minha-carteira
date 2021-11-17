import { Container } from './style'

interface IHistoryFinanceCard {
    tagColor: string,
    title: string,
    date: string,
    amount: string
}

const HistoryFinanceCard:React.FC<IHistoryFinanceCard> = ({
    tagColor, title, date, amount
}) => (
    <Container tagColor={tagColor}>
        <div> 
            <h4>{title}</h4>
            <h6>{date}</h6>
        </div>
        <span>{amount}</span>
    </Container>
)

export default HistoryFinanceCard
