import { Routes, Route } from 'react-router'

import Layout from '../components/Layout'
import Dashboard from '../pages/Dashboard'
import List from '../pages/List'


const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/list/:type" element={<List />} />
        </Routes>
    </Layout>
)

export default AppRoutes