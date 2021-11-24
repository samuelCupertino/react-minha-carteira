import { useState, useCallback, FormEvent } from 'react'

import {
    Container,
    Logo,
    Form,
    FormTitle
} from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg'

const SignIn:React.FC = () => {
    const { signIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback((ev: FormEvent) => {
        ev.preventDefault()
        signIn(email, password)
    }, [email, password, signIn])

    return (
        <Container>
            
            <Logo>
                <img src={logoImg} alt="Logo Minha Carteira"/>
                <h3>Minha Carteira</h3>
            </Logo>

            <Form onSubmit={handleSubmit}>
                <FormTitle>Entrar</FormTitle>
                <Input
                    placeholder="E-mail"
                    type="email"
                    required
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    required
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <Button>Entrar</Button>
            </Form>
        </Container>  
    )
}

export default SignIn