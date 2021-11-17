import { Container } from './style'

interface IWalletBoxProps {
    title: string
    description: string
    footerText: string
    icon?: string
}

const MessageBox: React.FC<IWalletBoxProps> = ({
    title, description, footerText, icon
}) => {
    return (
        <Container>
            <header>
                <h4>{title}</h4>
            {icon && <img src={icon} alt={`Icone ${icon} ilustrando ${title}`} />}
            </header>
            
            <p>{description}</p>

            <footer>
                <span>{footerText}</span>
            </footer>
        </Container>
    )
}

export default MessageBox
