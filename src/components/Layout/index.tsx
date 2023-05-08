import React from 'react'
import type { ReactNode } from 'react'
import GhostButton from '../GhostButton'
import BottonNavigation from '../BottonNavigation'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  function changeTheme(theme: React.SetStateAction<'light' | 'dark'>) {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  return (
    <div className="w-[100vw] h-[100vh] text-slate-900 bg-slate-50 dark:text-gray-50 dark:bg-gray-900">
      {children}
      <div className="flex flex-col gap-8">
        <GhostButton onClick={() => changeTheme('dark')}>Dark</GhostButton>
        <GhostButton onClick={() => changeTheme('light')}>Light</GhostButton>
      </div>
      <BottonNavigation />
    </div>
  )
}

export default Layout
