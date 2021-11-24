import {
    PieChart,
    Pie, 
    Cell,
    ResponsiveContainer
} from 'recharts'

import { 
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight
} from './styles'

interface IPieChartProps {
    data: {
        name: string
        value: number
        percent: number
        varColor: string
    }[]
}

const getVarCssValue = (varCss:string) => getComputedStyle(document.body).getPropertyValue(varCss)

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {data.map(({ varColor, percent, name }, idx) => (
                    <Legend key={idx} varColor={varColor}>
                        <div>{percent}%</div>
                        <span>{name}</span>
                    </Legend>
                ))}
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {data.map(({name, varColor}) => (
                            <Cell key={name} fill={getVarCssValue(varColor)} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)

export default PieChartBox