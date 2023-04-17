import React, { FC, useState } from 'react'

export enum CardVariant{
  outline= "outline",
  primary= "primary"
}

interface CardProps {
    width: string,
    height?: string,
    children?: React.ReactNode,
    variant?: CardVariant,
    onClick: (number: number) => void
}

export const Card: FC<CardProps> = ({width, height, children, variant, onClick}) => {
  const [state, setState] = useState<number>(0)
  
  return (
    <div style={{
    width, 
    border: variant === CardVariant.outline ? '1px solid gray' : "none", 
    height,
    background: variant === CardVariant.primary? 'lightgray' : ''
    }}
    onClick={() => onClick(state)}>
      {children}
    </div>
  )
}
