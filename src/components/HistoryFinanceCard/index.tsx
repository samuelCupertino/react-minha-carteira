import { Container } from './style'

interface IHistoryFinanceCard {
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string
}

const HistoryFinanceCard:React.FC<IHistoryFinanceCard> = ({
    tagColor, title, subtitle, amount
}) => (
    <Container tagColor={tagColor}>
        <div> 
            <h4>{title}</h4>
            <h6>{subtitle}</h6>
        </div>
        <span>{amount}</span>
    </Container>
)

export default HistoryFinanceCard
