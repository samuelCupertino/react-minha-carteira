import {
    BarChart,
    Bar, 
    Cell,
    Tooltip,
    ResponsiveContainer
} from 'recharts'

import { formatCurrencyBRL } from '../../utils/formatCurrencyBRL'

import { 
    Container,
    SideLeft, 
    LegendContainer,
    Legend,
    SideRight
} from './styles'

interface IPieChartProps {
    title: string
    data: {
        name: string
        amount: number
        percent: number
        varColor: string
    }[]
}

const getVarCssValue = (varCss:string) => getComputedStyle(document.body).getPropertyValue(varCss)

const PieChartBox: React.FC<IPieChartProps> = ({ title, data }) => (
    <Container>
        <SideLeft>
            <h2>{title}</h2>             
   
            <LegendContainer>
                {data.map(({name, percent, varColor}) => (
                    <Legend key={name} varColor={varColor}>
                        <div>{percent}%</div>
                        <span>{name}</span>
                    </Legend>
                ))}
            </LegendContainer>     
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Bar dataKey="amount" name="Valor">
                        {data.map(({name, varColor}) => (
                            <Cell key={name} fill={getVarCssValue(varColor)} />
                        ))}
                    </Bar>
                    <Tooltip 
                        cursor={{fill: 'none'}}
                        formatter={(value:number)=> formatCurrencyBRL(value)}
                    />
                </BarChart>                
            </ResponsiveContainer>
        </SideRight>

    </Container>
)

export default PieChartBox