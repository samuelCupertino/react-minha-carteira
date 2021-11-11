import { useMemo } from 'react'
import { Container, Profile, Welcome, UserName } from './style'

import Toggle from '../Toggle'
import emojis from '../../utils/emojis'

const MainHeader:React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * (emojis.length - 1))
        return emojis[index]
    }, [emojis])

    console.log(emoji)

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