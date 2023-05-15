import React from 'react'
import type { ReactNode } from 'react'

interface ModalProps {
  open: boolean
  children: ReactNode
}

export default function Modal({ open = false, children }: ModalProps) {
  return (
    <div
      className={
        open ? 'w-[100vw] h-[100vh] backdrop-blur-sm' : 'hidden invisible'
      }
    >
      {children}
    </div>
  )
}
