import { Routes, Route } from 'react-router-dom'

import Signin from '../pages/SignIn'


const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Signin />} />
    </Routes>
)

export default AuthRoutes