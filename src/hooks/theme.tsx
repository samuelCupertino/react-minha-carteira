import { createContext, useContext, useState } from 'react'

import { dark, light }  from '../styles/themes'

interface IThemeContext {
    toggleTheme(): void
    theme: ITheme
}

interface ITheme {
    title: string
    color: {
        primary: string
        secondary: string
        tertiary: string

        white: string
        black: string
        gray: string

        success: string
        info: string
        warning: string
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider:React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(()=> {
        const themeStorage = localStorage.getItem('@minha-carteira:theme')
        return themeStorage ? JSON.parse(themeStorage) : dark
    })

    const toggleTheme = () => {
        const newTheme = theme === dark ? light : dark
        localStorage.setItem('@minha-carteira:theme', JSON.stringify(newTheme))
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ():IThemeContext => useContext(ThemeContext)
