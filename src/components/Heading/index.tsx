import React, { useContext } from 'react'
import type { ReactNode } from 'react'
import { LevelContext } from '../../contexts/LevelContext'

interface Props {
  children: ReactNode
}

const Heading: React.FC<Props> = ({ children }) => {
  const level = useContext(LevelContext)

  if (level < 1) {
    throw Error('Heading must be inside a Section!')
  } else if (level > 6) {
    throw Error(`Invalid heading level: ${level}. It must be between 1 and 6.`)
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return <Tag>{children}</Tag>
}

export default Heading
