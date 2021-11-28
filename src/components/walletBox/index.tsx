import { Container } from './style'

import CountUp from 'react-countup'

import dollar from '../../assets/dollar.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
const iconsSrc = { dollar, arrowUp, arrowDown }

interface IWalletBoxProps {
    title: string
    amount: number
    description: string
    varColor: string
    icon?: 'dollar' | 'arrowUp' | 'arrowDown'
}

const WalletBox: React.FC<IWalletBoxProps> = (
    { title, amount, description, varColor, icon }
) => {
    return (
        <Container varColor={varColor}>
            <h4>{title}</h4>
            <span>
                <strong>R$ </strong>
                <CountUp 
                    end={amount} 
                    separator="." 
                    decimal="," 
                    decimals={2} 
                    duration={1} 
                />
            </span>
            <p>{description}</p>
            {icon && <img src={iconsSrc[icon]} alt={`icone ${icon} ilustrando ${title}`} />}
        </Container>
    )
}

export default WalletBox
