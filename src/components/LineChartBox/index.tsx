import {
    Line,
    LineChart, 
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

import { formatCurrencyBRL } from '../../utils'

import { 
    Container, 
    Header,
    LegendContainer,
    Legend
} from './styles'

interface ILineChartProps {
    data: {
        month: string
        amountEntry: number
        amountOutput: number
    }[]
    varColorEntry: string
    varColorOutput: string
}

const getVarCssValue = (varCss:string) => getComputedStyle(document.body).getPropertyValue(varCss)

const LineChartBox: React.FC<ILineChartProps> = ({
    data, varColorEntry, varColorOutput
}) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>
   
            <LegendContainer>
                <Legend key="1" varColor={varColorEntry}>Entradas</Legend>
                <Legend key="2" varColor={varColorOutput}>Saídas</Legend>
            </LegendContainer>            
        </Header>

        <ResponsiveContainer>
            <LineChart data={data} >
                <CartesianGrid strokeDasharray="3 3" stroke="#CECECE" />
                <XAxis dataKey="month"  stroke="#CECECE"/>
                <Tooltip formatter={(value:number)=> formatCurrencyBRL(value)} />
                <Line
                    type="monotone"
                    dataKey="amountEntry"
                    name="Entradas"
                    stroke={getVarCssValue(varColorEntry)}
                    strokeWidth={5}
                    dot={{r: 5}}
                    activeDot={{r: 8}}
                />
                <Line
                    type="monotone"
                    dataKey="amountOutput"
                    name="Saídas"
                    stroke={getVarCssValue(varColorOutput)}
                    strokeWidth={5}
                    dot={{r: 5}}
                    activeDot={{r: 8}}
                />
            </LineChart>

        </ResponsiveContainer>
    </Container>
)

export default LineChartBox