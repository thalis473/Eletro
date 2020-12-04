import React from 'react';
import Ouvidoria from './ouvidoria';
import Whatsapp from './whatsapp';
import Fone from './fone';


class Contact extends React.Component{
    render(){
    return(     
    
    <div>

        <Ouvidoria />
        <Whatsapp />
        <Fone />

    </div>
    );
};
};

export default Contact;