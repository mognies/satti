import { ComponentProps, PropsWithChildren } from "react"

const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link'
}

type Props = PropsWithChildren<React.ComponentProps<'button'> & { variant?: keyof typeof variants }>

function Button({ children, variant, ...props }: Props) {
    return <button className={`btn ${variant ? variants[variant] : ''}`} {...props}>{children}</button>
}

export default Button
