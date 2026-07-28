import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutUs from './pages/aboutUs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
      </Routes>
    </>
  )
}

export default App
