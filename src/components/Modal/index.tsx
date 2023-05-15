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
        open
          ? 'absolute top-0 right-0 bottom-0 left-0 z-[999] w-[100vw] h-[100vh] backdrop-blur-sm'
          : 'hidden invisible'
      }
    >
      {children}
    </div>
  )
}
