import classNames from 'classnames';
import React from 'react'

interface ButtonProps {
    type?: 'button';
    width?: string;
    ml?:string;
    mr?:string;
    p?:string;
    bg?:string;
    color?:string;
    text:string;
    styleClass?: string;
    [x: string]: any
}
const Button = ({
    type,
    width,
    ml,
    mr,
    p,
    bg,
    color,
    text,
    styleClass = '',
    ...restProps
}:ButtonProps) => {
  return (
    <button type={type} className={classNames(styleClass)} {...restProps}>{text}</button>
  )
}

export default Button