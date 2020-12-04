import React from 'react';
import whattap22 from '../../assts/logo/whattap22.jpg';
import './estilo.css';

class Whatsapp extends React.Component{
    render(){
    return(     
    
    <div class="justify-content-center">
         <img id="imgWhatsapp"  src={whattap22} alt="WhatsApp"/> <br/><br/>
            <p className="text-info">(21) 9956-3265 </p>
                    <br/><br/><br/>
    </div>
    );
};
};

export default Whatsapp;