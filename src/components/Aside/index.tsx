import { 
    Container, 
    Header, 
    Title, 
    LogoImg, 
    MenuContainer, 
    MenuItemLink
} from './style'

import logoImgSrc from '../../assets/logo.svg' 

import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from 'react-icons/md'


const Aside:React.FC = () => (
    <Container>
        <Header>
            <LogoImg src={logoImgSrc} alt="Logo Minha Carteira" />
            <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>
            <MenuItemLink href="/dashboard">
                <MdDashboard size={20} />
                Dashboard
            </MenuItemLink>
            <MenuItemLink href="/list/entry-balance">
                <MdArrowDownward size={20} />
                Entradas
            </MenuItemLink>
            <MenuItemLink href="/list/exit-balance">
                <MdArrowUpward size={20} />
                Saídas
            </MenuItemLink>
            <MenuItemLink href="#">
                <MdExitToApp size={20} />
                Sair
            </MenuItemLink>
        </MenuContainer>
    </Container>
)

export default Aside
