import { Grid } from './style'
import { MainHeader } from '../MainHeader'
import { Aside } from '../Aside'
import { Content } from '../Content'

export const Layout:React.FC = () => (
    <>
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    </>
)