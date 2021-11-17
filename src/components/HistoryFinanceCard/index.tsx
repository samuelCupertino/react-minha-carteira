import { Container } from './style'

interface IHistoryFinanceCard {
    tagVarColor: string,
    title: string,
    date: string,
    amount: string
}

const HistoryFinanceCard:React.FC<IHistoryFinanceCard> = ({
    tagVarColor, title, date, amount
}) => (
    <Container tagVarColor={tagVarColor}>
        <div> 
            <h4>{title}</h4>
            <h6>{date}</h6>
        </div>
        <span>{amount}</span>
    </Container>
)

export default HistoryFinanceCard
