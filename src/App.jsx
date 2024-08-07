import { Outlet } from 'react-router-dom'
import Header from './SharedComponents/Header/Header'
import Footer from './SharedComponents/Footer/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
