import React from 'react'
import MenuIcon from '../../../public/assets/menu.svg'
import AccountCircle from '../../../public/assets/account_circle.svg'
import GhostButton from '../GhostButton'

export default function TopAppBar() {
  return (
    <div className="w-full h-[64px] absolute top-0 right-0 left-0 bg-slate-300 dark:bg-gray-700">
      <div className="grid gap-1 grid-cols-3 grid-rows-1 items-center w-full h-full p-4 text-slate-900 dark:text-gray-50">
        <div className="flex items-center justify-start w-full h-full">
            <div id="menu-opener" className="hidden invisible md:block md:visible">
          <GhostButton>
            <MenuIcon />
          </GhostButton>
            </div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div>TOP APP BAR</div>
        </div>
        <div className="flex items-center justify-end w-full h-full">
          <GhostButton>
            <AccountCircle />
          </GhostButton>
        </div>
      </div>
    </div>
  )
}
