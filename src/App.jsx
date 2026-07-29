import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage.jsx'
import AboutUs from './pages/aboutUs.jsx'
import ContactUs from './pages/contactus.jsx'
import Registration from './pages/user/registration.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>

        <Route path='/user/register' element={<Registration />}></Route>
      </Routes>
    </>
  )
}

export default App
