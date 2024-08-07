import { Outlet } from 'react-router-dom'
import Header from './SharedComponents/Header/Header'
import Footer from './SharedComponents/Footer/Footer'
import Navbar from './SharedComponents/Navbar/Navbar'

function App() {


  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
     
    </>
  )
}

export default App
