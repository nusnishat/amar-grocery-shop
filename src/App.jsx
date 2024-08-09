import { Outlet } from 'react-router-dom'
import Header from './SharedComponents/Header/Header'
import Footer from './SharedComponents/Footer/Footer'
import Navbar from './SharedComponents/Navbar/Navbar'
import { useContext, useEffect } from 'react'
import { AuthContext } from './Providers/AuthProviders'


function App() {
  const {user, orders, setOrders} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/checkOut?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setOrders(data))
    }, []);
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
