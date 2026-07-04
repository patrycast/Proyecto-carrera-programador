import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { LayoutContainer } from "./LayoutStyles"


//la pantalla se desplaza automaticamnte arriba
export const Layout = ({children}) => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}
