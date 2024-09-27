import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

const BottomMenu = () => {
  let currentPath = window.location.pathname

  const { address } = useAccount()
  const [width, setWidth] = useState(window.innerWidth)
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <div>
      {isMobile ? (
        <div
          className="fixed bg-[#17134e] flex flex-col gap-[10px] px-[32px] w-full items-center overflow-hidden bottom-0"
          style={{
            transform: 'none',
            transformOrigin: '50% 50% 0px',
            zIndex: '100'
          }}
        >
          <div className="flex flex-row gap-4">
            <Link to="/CreateTeleFun" className="left-bar-link" style={currentPath === '/CreateTeleFun' ? { background: "#00ee0030", borderRadius: "12px" } : {background: "transparent"} }>
              <span
                className={
                  currentPath === '/CreateTeleFun'
                    ? 'text-[12px] uppercase text-[#e2fea5]'
                    : 'text-[12px] uppercase text-[#f8ffe8] hover:text-[#e2fea5]'
                }
              >
                Deploy
              </span>
            </Link>
            <Link to="/AllLaunches" className="left-bar-link" style={currentPath === '/AllLaunches' ? { background: "#00ee0030", borderRadius: "12px" } : {background: "transparent"} }>
              <span
                className={
                  currentPath === '/' || currentPath === '/AllLaunches'
                    ? 'text-[12px] uppercase text-[#e2fea5]'
                    : 'text-[12px] uppercase text-[#f8ffe8] hover:text-[#e2fea5]'
                }
              >
                Trade
              </span>
            </Link>

            <Link to={'/profile/?address=' + address} className="left-bar-link" style={currentPath.includes('/profile') ? { background: "#00ee0030", borderRadius: "12px" } : {background: "transparent"} }>
              <span
                className={
                  currentPath.includes('/profile')
                    ? 'text-[12px] uppercase text-[#e2fea5]'
                    : 'text-[12px] uppercase text-[#f8ffe8] hover:text-[#e2fea5]'
                }
              >
                Portfolio
              </span>
            </Link>
            <Link to={'#'} className="left-bar-link" style={currentPath === '#' ? { background: "#00ee0030", borderRadius: "12px" } : {background: "transparent"} }>
              <span
                className={
                  currentPath === '#'
                    ? 'text-[12px] uppercase text-[#e2fea5]'
                    : 'text-[12px] uppercase text-[#f8ffe8] hover:text-[#e2fea5]'
                }
              >
                Trending
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default BottomMenu
