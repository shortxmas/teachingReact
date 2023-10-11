import * as React from "react";
import { BrowserRouter,Link} from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import {Contact} from '../Pages/Contact'
import {Resume} from '../Pages/Resume'
import {Home} from '../Pages/Home'


export const Navbar = () =>{

  return(
      <>
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
            <div className="container">

                <a className="navbar-brand">
            
                    
                        <a className="nav-link" href="#top">
                           <h1>LEIGHTON</h1>
                        </a>

                </a>

                <button className="navbar-toggler" data-bs-toggle = "collapse"
                data-bs-target = "#nav" aria-controls = "nav" aria-label=
                "Expand Navigation">
                    <span className="navbar-toggler-icon">

                    </span>
    
                </button>

                <div className= "collapse navbar-collapse"  id="nav">
                    <ul className="navbar-nav navbar-right nav-routes">
                    
                       
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                    </Link>
                        

                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Resume</a>
                        </li>
                    </Link>
                   
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </Link>
                    </ul>
                </div>
              
                <span className="navbar-text" style={{color:'mintcream'}}>
                    <h6>
                    Information & Computer Science Student
                    </h6>
                </span>
        
             

            </div>
            
        
        </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
    </BrowserRouter>

        
      
      
      
      
      </>


  )



}