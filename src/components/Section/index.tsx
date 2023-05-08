import React, { useContext } from 'react'
import type { ReactNode } from 'react'
import { LevelContext } from '../../contexts/LevelContext'

interface Props {
  children: ReactNode
}

const Section: React.FC<Props> = ({ children }) => {
  const level = useContext(LevelContext)
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

export default Section
