import { useMemo } from 'react'
import { Container, Profile, Welcome, UserName } from './styles'

import Toggle from '../Toggle'
import emojis from '../../utils/emojis'

import { useTheme } from '../../hooks/theme'

const MainHeader:React.FC = () => {
    const emoji = useMemo(()=> emojis[Math.floor(Math.random() * (emojis.length - 1))], [])
    const { theme, toggleTheme } = useTheme()

    return (
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={theme.title === 'dark'}
                onChange={toggleTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome> 
                <UserName>Samuel Cupertino.</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader
