import { useMemo } from 'react'
import { Container, Profile, Welcome, UserName } from './style'

import Toggle from '../Toggle'
import emojis from '../../utils/emojis'

import { useTheme } from 'styled-components'

const MainHeader:React.FC = () => {
    const emoji = useMemo(()=> emojis[Math.floor(Math.random() * (emojis.length - 1))], [])
    const 
    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome> 
                <UserName>Samuel Cupertino.</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader
