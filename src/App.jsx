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
// import EMaths from './pages/notes/engineeringMathematics.jsx'
import PdfViewer from './pages/pdfViewer/pdfViewer.jsx'
import Profile from './pages/user/profile.jsx'
import Queries from './pages/admin/querys.jsx'
import UploadNotes from './pages/admin/uploadNotes.jsx'
import NotesPage from './pages/notes/NotesPage.jsx'
import notesRoutes from './constants/notesConstants/notesRoutes.js'
// import EPhysics from './pages/notes/engineeringphy1.jsx'
// import EChemistry from './pages/notes/engineeringchem1.jsx'

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
          	<Route path='/admin/uploadnotes' element={<UploadNotes />}></Route>
          
        </Route>

        <Route element={<RequireAuth allowedRoles={['USER', 'ADMIN']} />} >
			<Route path='/profile' element={<Profile />}></Route>
			<Route path='/compiler' element={<Compiler />}> </Route>
			<Route path='/notes' element={<NotesHomePage />}></Route>

			{notesRoutes.map((route) => (
				<Route
					path={route.path}
					element={<NotesPage key={route.path} {...route} />}
				/>
			))}

			<Route path="/pdf-viewer" element={<PdfViewer />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
