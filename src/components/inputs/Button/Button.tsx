import { ComponentProps, PropsWithChildren, VFC } from "react"
import cn from "classnames";

type Variant = 'primary' | 'secondary'

type Props = PropsWithChildren<{ variant?: Variant }>

function Button({ children, variant, ...props }: Props) {
    return <button className={cn('btn', {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary'
    })}>{children}</button>
}

export default Button
