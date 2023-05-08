import React, { ButtonHTMLAttributes } from 'react'
import type { ReactNode } from 'react'

interface SurfaceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const SurfaceButton: React.FC<SurfaceButtonProps> = ({
  children,
  className,
  ...rest
}: SurfaceButtonProps) => {
  return (
    <button
      type="button"
      className={`border-none cursor-pointer rounded-lg bg-slate-50 shadow dark:bg-gray-900 dark:shadow-gray-500 ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default SurfaceButton
