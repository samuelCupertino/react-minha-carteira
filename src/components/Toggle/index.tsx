import { Container, ToggleLabel, ToggleSelector} from './style'

const Toggle:React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={(ev)=> console.log(ev)} 
        />
        <ToggleLabel>Dark</ToggleLabel>
    
    </Container>
)

export default Toggle
