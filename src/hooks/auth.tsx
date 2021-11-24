import { createContext, useContext, useState, useCallback } from 'react'

interface IAuthContext {
    isLogged: boolean
    signIn(email:string, password:string): void
    signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }) => {
    const [isLogged, setLogged] = useState(
        ()=> !!localStorage.getItem('@minha-carteira:isLogged')
    )

    const signIn = useCallback((email:string, password:string) => {
        console.log(email, password)
        if(email === 'test@email.com' && password === '123456') {
            localStorage.setItem('@minha-carteira:isLogged', 'true')
            setLogged(true)
        }
        else {
            alert('Email ou senha incorretos')
        }
    }, [])

    const signOut = useCallback(() => {
        localStorage.removeItem('@minha-carteira:isLogged')
        setLogged(false)
    }, [])

    return (
        <AuthContext.Provider value={{ isLogged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ():IAuthContext => useContext(AuthContext)