import React from 'react';
import './banner.css';
import banner1 from '../../assts/banner/banner1.webp';
import banner2 from '../../assts/banner/banner2.webp';
import banner3 from '../../assts/banner/banner3.png';

class Banner extends React.Component{
  
  render(){
    return(
    <div className="container-fluid">
      <hr/>
      <br/>
          <img className="img-fluid" id="bannerone" src={banner1} alt="preco"/>
          <br/>
          <br/>

          <nav className=" container-fluid navbar navbar-expand-lg  justify-content-center">     
            <img className="img-fluid" id="bannertwo" src={banner2}/>     
            <img className="img-fluid" id="bannerthree" src={banner3}/>
          </nav>
    </div>
    ) 
  };
};

export default Banner;