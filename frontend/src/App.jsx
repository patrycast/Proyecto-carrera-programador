import { Routes } from "./Routes/Routes"
import { Navbar } from "./components/navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { Layout } from "./components/Layout/Layout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function App() {

  return (
    <Layout>
       <ToastContainer position="bottom-center" theme="dark" autoClose={2000} />
        <Navbar/>
        <Routes/>
        <Footer/>
    </Layout>
  )
}

export default App
