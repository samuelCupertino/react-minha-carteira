import { Container, TitleContainer, Controllers } from './style'

interface IContentHeaderProps {
    title: string
    varColor: string
    children: React.ReactNode
}

const ContentHeader:React.FC<IContentHeaderProps> = ({
    title, varColor, children
}) => (
    <Container>
        <TitleContainer varColor={varColor}>
            <h1>{title}</h1>
        </TitleContainer>

        <Controllers>
            {children}
        </Controllers>
    </Container>
)

export default ContentHeader