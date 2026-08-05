import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage.jsx'
import AboutUs from './pages/aboutUs.jsx'
import ContactUs from './pages/contactus.jsx'
import Registration from './pages/user/registration.jsx'
import Login from './pages/user/login.jsx'
import NotFound from './pages/notFound.jsx'
import Denied  from './pages/deniedPage.jsx'
import RequireAuth from './components/auth/requireAuthorization.jsx'
import Compiler from './pages/compiler.jsx'
import NotesHomePage from './pages/notes/noteHome.jsx'
import EMaths from './pages/notes/engineeringMathematics.jsx'
import PdfViewer from './pages/pdfViewer/pdfViewer.jsx'
import Profile from './pages/user/profile.jsx'
import Queries from './pages/admin/querys.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>

        <Route path='/user/register' element={<Registration />}></Route>
        <Route path='/user/login' element={<Login />}></Route>
        <Route path='/denied' element={<Denied /> }></Route>

        <Route element={<RequireAuth allowedRoles={['ADMIN']} />} >
          <Route path='/admin/queries' element={<Queries />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={['USER', 'ADMIN']} />} >
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/compiler' element={<Compiler />}> </Route>
          <Route path='/notes' element={<NotesHomePage />}></Route>
          <Route path='notes/engineeringmaths1' element={<EMaths />}></Route>
          <Route path="/pdf-viewer" element={<PdfViewer />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
