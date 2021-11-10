import { Container, ToggleLabel, ToggleSelector} from './style'

export const Toggle:React.FC = () => (
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