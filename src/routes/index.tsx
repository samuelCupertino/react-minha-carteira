import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {
    const { isLogged } = useAuth()

    return (
        <BrowserRouter>
            {isLogged ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}

export default Routes