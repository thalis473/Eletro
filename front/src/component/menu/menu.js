import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';
import logo from '../../assts/logo/logoRecode.jpeg';

class Menu extends React.Component{
    render(){
    return(     
    
    <div id="menu" className="container-fluid" >

      <nav id="menu" className="navbar navbar-expand-lg navbar-light ">
            <Link to='/' className=" navbar-brand" > 
            <img  id="imglogo" src={logo}/>
            </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
              <span className="navbar-toggler-icon "></span>
            </button>
            
        <div className="collapse navbar-collapse" id="navbarNavDropdown">         
        <ul className="navbar-nav">

          <li className="nav-item active">
              <Link to='/produtos' className="  nav-link text-white"> Produtos <span class="sr-only">(Página atual)</span></Link>
          </li>
          <li className="nav-item">
              <Link to='/nossas-lojas' className="  nav-link text-white " >Nossas Lojas</Link>
          </li>
          <li className="nav-item">
              <Link  to='/contato'  className="  nav-link text-white" href="contato.html">Contato</Link>
          </li>

        </ul>
        </div>
      </nav>
                           
 </div>
   
                
   )
    }
};
 
export default Menu;