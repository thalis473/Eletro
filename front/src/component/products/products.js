import React from 'react';
import './products.css'; 
import axios from 'axios';





class Products extends React.Component{

    constructor(){ 
        super();

        this.state={

            dados:[],
            categoria:"", /* o estato da minha categoria da zerado, ou seja esta como dse eu clicasse no button value "todos"*/
        } 
      this.Categoria = this.Categoria.bind(this); /* bind pra informar meu stats na minha class construtor*/
    }
       
 
  Categoria(e) { 
      this.setState({ categoria:""})
      this.setState({categoria:e.target.value })        
  };
        /*Didmount pois meu componente e uma class nao funcao*/    
    componentDidMount(){                    
        axios.get('http://localhost/testePHP/backeletroRecodejoin/apiprodutos.php' )/*usei o axios para pushar do banco de dados meu produtos em objeto json*/
        .then( (resposta) => { 
              this.setState({dados:resposta.data} )
         })  
    }

render(){
return(
<div className="container" >
<br></br>
            <h2>Categorias</h2>
{/*minha lista de produtos*/}
<div className="navbar">
<div className="row">

                 <button  type="button" className="btn btn-outline-secondary" value=""  onClick={this.Categoria}>Todos (12)
                 </button>

                <button  type="button" className="btn btn-outline-secondary" value='fogao' onClick={this.Categoria}>Fogão (4)
                </button>

                <button  type="button" className="btn btn-outline-secondary" value='geladeira' onClick={this.Categoria}> Geladeira (5)
                </button>

                <button  type="button" className="btn btn-outline-secondary" value='liquidificador' onClick={this.Categoria}>Liquidificador (3)
                </button>

                <button  type="button" className="btn btn-outline-secondary"  value='maquina de lavar'  onClick={this.Categoria}> Maquina de lavar (2)
                </button>

                 <button  type="button" className="btn btn-outline-secondary" value='cafeteira' onClick={this.Categoria}> Cafeteira (4)
                 </button> 
                
                <button  type="button" className="btn btn-outline-secondary"  value='ventilador' onClick={this.Categoria}> Ventilador (1)
                </button>  
                </div>
                 <div className="">
                <button  type="button" className="btn btn-outline-secondary" value='torradeira'  onClick={this.Categoria}> Torradeira (4)
                </button> 

                <button  type="button" className="btn btn-outline-secondary" value='tv' onClick={this.Categoria}>Televisão (7)
                </button>

                <button  type="button" className="btn btn-outline-secondary" value='arcondicionado' onClick={this.Categoria}>Arcondicionado (3)
                </button>

                <button  type="button" className="btn btn-outline-secondary" value='radio' onClick={this.Categoria}> Radio (5)
                </button>

                <button  type="button" className="btn btn-outline-secondary" value='microondas' onClick={this.Categoria}> Microondass (9)
                </button>

                <button  type="button" className="btn btn-outline-secondary"  value='impressora' onClick={this.Categoria}> Impressora (2)
                </button>
                </div>
</div> 
<br/><br/><br></br>          
    <br/>
    {/* aqui eu inicio a parte que meus produtos ficam a avista*/ }
    <nav className="navbar justify-content-center">
    <div className="container-fluid" >

        {this.state.dados.map((item)=>{  
            /*fiz um iF else para fazer a logica de ao clilcar no buttao eu ter meu produto de acordo com o botao selecionado*/
                    if( this.state.categoria === item.categoria  ){

                        return(

                            <div  className="itens1 col col-md-4 text-center">
                                <img id="img_produtos"   src={item.img} />
                                <p className="text-secondary" onClick={this.Categoria} id="text1">   {item.descricao } <br/> Automático Inox </p>
                                <hr/>
                                <p className="text-danger" id="valor1"> <s> de R${ item.preco_inicial} por </s> </p>
                                <p className="text-success" id="valor2"> R$ { item.preco_final } </p>
                            </div>
                        )                                            
                    }else if( this.state.categoria === "" ){
                        return(
                            <div  className="itens1 col col-md-4 text-center">
                                <img id="img_produtos"   src={item.img} />
                                <p className="text-secondary" onClick={this.Categoria} id="text1">   {item.descricao } <br/> Automático Inox </p>
                                <hr/>
                                <p className="text-danger" id="valor1"> <s> de R${ item.preco_inicial} por </s> </p>
                                <p className="text-success" id="valor2"> R$ { item.preco_final } </p>
                            </div>
                        )
                    }          
            })
            }
    </div>
    </nav>
    
</div>

)  
};
};

export default Products;




