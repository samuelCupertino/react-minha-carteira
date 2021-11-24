import { Container } from './styles'

import { ButtonHTMLAttributes } from 'react'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button:React.FC<IButtonProps> = ({children, ...props}) => (
    <Container {...props}>{children}</Container>
)

export default Button
