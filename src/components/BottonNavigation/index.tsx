import React, { FormEvent, HTMLAttributes, useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/router'
import GhostButton from '../GhostButton'
import SurfaceButton from '../SurfaceButton'
import MoreVert from '../../../public/assets/more_vert.svg'
import Home from '../../../public/assets/home.svg'
import Add from '../../../public/assets/add.svg'
import Popover from '../Popover'

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

const Item: React.FC<ItemProps> = ({ children, className }) => {
  return (
    <div className={`w-full h-full flex items-center ${className ?? ''}`}>
      {children}
    </div>
  )
}

const BottonNavigation: React.FC = () => {
  const router = useRouter()
  const [anchorElMenuLeft, setAnchorElMenuLeft] = useState<HTMLElement | null>(
    null
  )
  const [anchorElMenuRight, setAnchorElMenuRight] =
    useState<HTMLElement | null>(null)
  const openMenuLeft = Boolean(anchorElMenuLeft)
  const openMenuRight = Boolean(anchorElMenuRight)

  function handleClickOpenMenu(event: React.MouseEvent<HTMLElement>) {
    if (event.currentTarget.id === 'openLeft') {
      setAnchorElMenuLeft(event.currentTarget)
    } else {
      setAnchorElMenuRight(event.currentTarget)
    }
  }

  function closeMenuLeft() {
    setAnchorElMenuLeft(null)
  }
  function closeMenuRight() {
    setAnchorElMenuRight(null)
  }

  function goToHome(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <div className="w-full h-[64px] absolute right-0 bottom-0 left-0 bg-slate-300 dark:bg-gray-700">
      <div className="w-full h-full text-justify flex flex-row items-center p-4 text-slate-900 dark:text-gray-50">
        <Item className="justify-start">
          <Popover
            id="menuLeft"
            anchorEl={anchorElMenuLeft}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={openMenuLeft}
            onClose={closeMenuLeft}
          >
            Menu Left
          </Popover>
          <GhostButton id="openLeft" onClick={(e) => handleClickOpenMenu(e)}>
            <MoreVert />
          </GhostButton>
        </Item>
        <Item className="justify-center">
          <GhostButton onClick={(e) => goToHome(e)}>
            <Home />
          </GhostButton>
        </Item>
        <Item className="justify-end">
          <Popover
            id="menuRight"
            anchorEl={anchorElMenuRight}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openMenuRight}
            onClose={closeMenuRight}
          >
            Menu Right
          </Popover>
          <SurfaceButton
            id="openRight"
            onClick={(e) => handleClickOpenMenu(e)}
            className="ml-[auto]"
          >
            <Add />
          </SurfaceButton>
        </Item>
      </div>
    </div>
  )
}

export default BottonNavigation
