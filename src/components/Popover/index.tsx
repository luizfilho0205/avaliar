import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  HTMLAttributes
} from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import * as S from './style'

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  anchorEl: HTMLElement | null
  anchorOrigin: { vertical: string; horizontal: string }
  open: boolean
  onClose: () => void
}

const DOMRectWhenNull = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
}

const Popover: React.FC<PopoverProps> = ({
  children,
  anchorEl,
  anchorOrigin,
  open,
  onClose
}) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const myElementRef = useRef<HTMLDivElement>(null)
  const themeContext = useContext(ThemeContext)
  const [bottom, setBottom] = useState<number>(0)
  const [right, setRight] = useState<number>(0)
  const [left, setLeft] = useState<number>(0)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('click', handleClick)

    if (myElementRef.current && anchorEl) {
      anchorEl.appendChild(myElementRef.current)
      if (open && anchorEl && myElementRef.current) {
        containerRef.current = anchorEl
        let anchorRect = anchorEl?.getBoundingClientRect() ?? DOMRectWhenNull

        if (anchorOrigin.vertical === 'top') {
          setBottom(window.innerHeight - anchorRect.top + 16)
        }

        if (anchorOrigin.horizontal === 'left') {
          setLeft(anchorRect.left)
        } else if (anchorOrigin.horizontal === 'right') {
          setRight(window.innerWidth - anchorRect.right)
        }
      }
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [anchorEl, open, onClose, myElementRef.current])

  return (
    <S.Container
      ref={myElementRef}
      theme={themeContext}
      open={open}
      sx={
        anchorOrigin.horizontal === 'left'
          ? { bottom: bottom, left: left }
          : { bottom: bottom, right: right }
      }
    >
      {children}
    </S.Container>
  )
}

export default Popover
