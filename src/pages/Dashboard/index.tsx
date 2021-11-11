import { Container } from './style'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const Dashboard:React.FC = () => {
    const options = [
        {value:1, label:'Option 1'},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard