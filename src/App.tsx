import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

import Routes from './routes'

import { useTheme }  from './hooks/theme'

export const App:React.FC = () => {
    const { theme } = useTheme()
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}