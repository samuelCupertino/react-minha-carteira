import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import { Dashboard, List, SignIn} from '../pages'


const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list/:type" element={<List />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    </Layout>
)

export default AppRoutes