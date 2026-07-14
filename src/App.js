import React from 'react'
import Nav from './Comp/Nav'
import StudentForm from './Comp/StudentForm'
import "./App.css"
import "./Comp/Nav.css"
import Studentdata from './Comp/Studentdata'
function App() {
  return (
    <div className=''>
     <Nav/>
    <StudentForm/>
    <Studentdata/>
    </div>
  )
}

export default App

