import { Container } from './style'

interface ISelectInputProps {
    options: {
        value: string | number
        label: string | number
    }[]
}

const SelectInput:React.FC<ISelectInputProps> = ({options}) => (
    <Container>
        <select>
            {options.map(({value, label}) => (<option value={value}>{label}</option>))}
        </select>
    </Container>
)

export default SelectInput