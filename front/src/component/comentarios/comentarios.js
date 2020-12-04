import React from 'react'; 
import axios from 'axios';
import './comentarios.css';

class Comentarios extends React.Component{
    constructor(){ 
        super();

            this.state={

            comentarios:[]
        }
    }            
    componentDidMount() {        
      
        axios.get('http://localhost/testePHP/backeletroRecodeJoin/apiformulario.php')
        .then( (resposta) => { 
               this.setState({comentarios:resposta.data} )

         })       
    };
    render(){

    return(
    <div className="container-fluid" >
        <br/>
        
        <div className="container justify-content-center" >
    <h1> Comentarios </h1>
    <br/>
            {this.state.comentarios.map((item)=>{
                console.log(item)
                
                return(
                    
                    <div className="container">
                        <ul className="list-group">
                        <li class="list-group-item list-group-item-info"><b>NOME:</b>{item.nome }</li>
                        <li class="list-group-item list-group-item-ligth"><b>MSG:</b>{item.msg}</li>
                        <li class="list-group-item list-group-item-success"> {item.data}</li>

                    </ul>
                    <br/>
                    </div>
                )
                })
                }
                </div>
        
        
        </div>
    );   
    };
    };

export default Comentarios;
