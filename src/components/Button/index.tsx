import React, { ButtonHTMLAttributes } from 'react'
import type { ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-slate-500 dark:bg-gray-500 w-fit h-fit border-none cursor-pointer rounded-lg p-1"
      {...rest}
    >
      {children}
    </button>
  )
}
