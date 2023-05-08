import React, { ButtonHTMLAttributes } from 'react'
import type { ReactNode } from 'react'

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  ...rest
}: GhostButtonProps) => {
  return (
    <button
      type="button"
      className="w-fit text-slate-900 dark:color dark:text-gray-50 bg-transparent cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  )
}

export default GhostButton
