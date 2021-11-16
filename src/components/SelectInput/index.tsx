import { Container } from './style'

interface ISelectInputProps {
    options: {
        value: string | number
        label: string | number
    }[],
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const SelectInput:React.FC<ISelectInputProps> = ({options, onChange}) => (
    <Container>
        <select onChange={onChange}>
            {options.map(({value, label}, idx) => (<option key={idx} value={value}>{label}</option>))}
        </select>
    </Container>
)

export default SelectInput
