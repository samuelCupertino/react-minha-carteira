import { Container } from './style'

interface ISelectInputProps {
    options: {
        value: string | number
        label: string | number
    }[],
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
    valueSelected?: string | number
}

const SelectInput:React.FC<ISelectInputProps> = ({options, onChange, valueSelected}) => (
    <Container>
        <select onChange={onChange} value={valueSelected}>
            {options.map(({value, label}, idx) => (<option key={idx} value={value}>{label}</option>))}
        </select>
    </Container>
)

export default SelectInput
