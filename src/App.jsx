
import './App.css'
import CRUD from './components/axios/CRUD'
import GetData from './components/axios/GetData'
import UpdateData from './components/axios/UpdateData'
import LoginForm from './components/event-handling/LoginForm'

import SignupForm from './components/event-handling/SignupForm'
import SimpleForm from './components/event-handling/SimpleForm'
import FormikValidation from './components/form-validation/FormikValidation'
import FormValidation from './components/form-validation/FormValidation'
import Header from './components/Header'
import Parent from './components/props/Parent'
import ParentClass from './components/props/ParentClass'
import StudentList from './components/props/StudentList'
import StateExample from './components/state/StateExample'
import StudentRecords from './components/state/StudentRecords'
import TeacherRecords from './components/state/TeacherRecords'
import UseEffectExample from './components/state/UseEffectExample'
import UseStateExample from './components/state/UseStateExample'
import ConditionalRender from './components/styling-conditional-rendering/ConditionalRender'
import ConditionalStyling from './components/styling-conditional-rendering/ConditionalStyling'
import Styling1 from './components/styling-conditional-rendering/Styling1'
import Greeting from './Greeting'
import NavBar from './Navbar'
import Home from './Pages/Home'
import Products from './Products'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import AddStudent from './components/axios/AddStudent'
import UpdateStudent from './components/axios/UpdateStudent'

function App() {

  return (
    <>
      {/* <div>
        <h1 className='title'>My first react app...</h1>
      </div>
      */}

      {/* <NavBar></NavBar>
      <Products /> */}
      {/* <Greeting /> */}

      {/* <Home />       */}
      {/* <Parent /> */}
      {/* <ParentClass /> */}

      {/* <StudentList /> */}

      {/* <Styling1 /> */}

      {/* <ConditionalRender /> */}

      {/* <ConditionalStyling/ > */}

      {/* <StateExample /> */}
      {/* <StudentRecords /> */}

      {/* <UseStateExample /> */}

      {/* <TeacherRecords /> */}

      {/* <SimpleForm /> */}

      {/* <LoginForm /> */}

      {/* <SignupForm /> */}

      {/* <UseEffectExample /> */}

      {/* <FormValidation /> */}

      {/* <FormikValidation /> */}

      {/* <GetData /> */}

      {/* <UpdateData /> */}

      {/* <CRUD /> */}

      {/* <Router>
        <div>
          <div className='logo'>

          </div>
          <div className='menu'> */}

            {/* <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "menu-items")} >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "menu-items")} >About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "menu-items")} >Contact</NavLink>
              </li>
             
            </ul> */}

            {/* <ul>
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/about"}>About us</Link></li>
                  <li><Link to={"/contact"}>Contact</Link></li>            
                </ul>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />} ></Route>

        </Routes>
      </Router> */}



        <Router>

            <Routes>
                <Route path='/' element={<CRUD />}></Route>
                <Route path='/add-student' element={<AddStudent />} ></Route>
                <Route path='/edit-student/:id' element={<UpdateStudent />}></Route>
            </Routes>
        </Router>

    </>
  )
}

export default App
