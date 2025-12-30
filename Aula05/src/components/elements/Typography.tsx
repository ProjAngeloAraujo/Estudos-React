import type React from "react";

interface TypographyProps {
  children: React.ReactNode
  bold?: boolean
}

export function Title({ children, bold }: TypographyProps) {
  return (
    <h1 className={`title ${bold ? 'bold' : ''}`}>
      {children}
    </h1>
  )
}

export function Subtitle({ children, bold }: TypographyProps) {

  return (
    <h2 className={`subtitle ${bold ? 'bold' : ''}`}>
        {children}
    </h2>
  )

}

export function Paragraph({ children, bold }: TypographyProps) {
  
    return (
        <p className={`paragraph ${bold ? 'bold' : ''}`}>
            {children}
        </p>
    )

}