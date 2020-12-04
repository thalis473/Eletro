
import React from 'react';
import './pagamento.css';
import pagamentos from '../../assts/banner/pagamento.png';

class Pagamento extends React.Component{
    render(){
        return(
            <div className="container-fluid text-danger">
                <h4>Formas de Pagamento</h4>

                <img  className="img-fluid imgpg" src={pagamentos} alt="formas de pagamento"/>
            </div>

        );   
    };
};

export default Pagamento;