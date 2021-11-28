import { useState } from 'react'

import { Link } from 'react-router-dom'

import { 
    Container, 
    Header, 
    ToggleMenu,
    Title, 
    LogoImg, 
    MenuContainer, 
    MenuItemLink,
    MenuItemButton,
    Footer
} from './style'

import logoImgSrc from '../../assets/logo.svg' 

import { useAuth } from '../../hooks/auth'

import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md'

import Toggle from '../Toggle'

import { useTheme } from '../../hooks/theme'


const Aside:React.FC = () => {
    const [ toggleMenuIsOpen, setToggleMenuIsOpen ] = useState(false)
    const { signOut } = useAuth()
    const { theme, toggleTheme } = useTheme()

    return (
        <Container isOpen={toggleMenuIsOpen}>
            <Header>
                <ToggleMenu>
                    {toggleMenuIsOpen 
                        ? <MdClose size={24} onClick={() => setToggleMenuIsOpen(false)}/> 
                        : <MdMenu size={24} onClick={() => setToggleMenuIsOpen(true)}/>
                    }
                </ToggleMenu>

                <LogoImg src={logoImgSrc} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <Link to="/dashboard"> 
                    <MenuItemLink>
                        <MdDashboard size={20} />
                        <span>Dashboard</span>
                    </MenuItemLink> 
                </Link>

                <Link to="/list/entry-balance"> 
                    <MenuItemLink >
                        <MdArrowDownward size={20} />
                        <span>Entradas</span>
                    </MenuItemLink>
                </Link>

                <Link to="/list/exit-balance"> 
                    <MenuItemLink>
                        <MdArrowUpward size={20} />
                        <span>Saídas</span>
                    </MenuItemLink>
                </Link>

                <Link to="/"> 
                    <MenuItemButton onClick={signOut}>
                        <MdExitToApp size={20} />
                        <span>Sair</span>
                    </MenuItemButton>
                </Link>
            </MenuContainer>

            <Footer>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={theme.title === 'dark'}
                    onChange={toggleTheme}
                />
            </Footer>
        </Container>
    )
}

export default Aside
