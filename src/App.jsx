import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage.jsx'
import AboutUs from './pages/aboutUs.jsx'
import ContactUs from './pages/contactus.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
  
      </Routes>
    </>
  )
}

export default App
