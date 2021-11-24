import { Container } from './styles'

import { InputHTMLAttributes } from 'react'

type IInputProps = InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<IInputProps> = props => (
    <Container {...props} /> 
)

export default Input
