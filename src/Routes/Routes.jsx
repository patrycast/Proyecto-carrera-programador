import { Routes as ReactDomRoutes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { AboutMe } from "../pages/AboutMe/AboutMe"
import { Contact } from "../pages/Contact/Contact"
import { Services } from "../components/Services/Services"
import { Login } from "../pages/Login/Login"
import { Register } from "../pages/Register/Register"
import { NotFound } from "../pages/NotFound/NotFound"
import { Servicios } from "../pages/Servicios/Servicios"
import { CompleteOrder } from "../pages/CompleteOrder/CompleteOrder"
import { Felicitaciones } from "../pages/Felicitaciones/Felicitaciones"
import ProtectedRoute from "./ProtectedRoute"
import { Orders } from "../pages/Orders/Orders"
import { Profile } from "../pages/Profile/Profile"


export const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/aboutMe" element={ <AboutMe/>}/>
        <Route path="/servicios" element={ <Servicios/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/felicitaciones" element={ <Felicitaciones/>}/>

        <Route path="/orders" element={ <Orders/>}/>
        <Route path="/profile" element={ <Profile/>}/>

        <Route path="/completeOrder" element={ 
          <ProtectedRoute redirectTo="/login"> 
            <CompleteOrder/> 
          </ProtectedRoute>
        }/>


        <Route path="/orders" element={
          <ProtectedRoute redirectTo="/login">
            <Orders/>
          </ProtectedRoute>
        }/>

        <Route path="/profile" element={
          <ProtectedRoute redirectTo="/login">
            <Profile/>
          </ProtectedRoute>
        }/>


        <Route path="*" element={ <NotFound/>}/>

    </ReactDomRoutes>
  )
}
