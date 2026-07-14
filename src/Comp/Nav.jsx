import React from 'react'
import  profile from "../assets/kiranzzz.jpg"
function Nav() {
  return (
    <div>
       <nav className="navbar nav1 d-flex justify-content-between navbar-expand-lg">
  <div className="container-fluid">
   <img className='rounded-circle' src={profile} width={80} alt="" />
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <div>
            <div> <h2>KIRANSINH ZALA</h2></div>
            <div>Red And White Multimedia Education , Nikol</div>
        </div>
</div>
<div className='d-flex' >
<div className='px-5'><h1>150</h1>
<p>students</p>
</div>
<div className='pe-5'><h1>05</h1>
<p>subjects</p>
</div>
<div><h1>84</h1>
<p>exams</p>
</div>
</div>
</div>
   
 
</nav>

    </div>
  )
}

export default Nav
