import React from 'react';
import {Link} from 'react-router-dom';
import './produtosHome.css';
import audio from '../../assts/produtoshome/audio.webp';
import automoveis from '../../assts/produtoshome/automoveis.webp';
import bebida from '../../assts/produtoshome/bebida.webp';
import decoracao from '../../assts/produtoshome/decora.webp';
import eletroportateis from '../../assts/produtoshome/eletroportateis.webp';
import notebook from '../../assts/produtoshome/notebook.webp';
import smartfone from '../../assts/produtoshome/smartfone.webp';
import utilidade from '../../assts/produtoshome/utilidade.webp';

class ProdutosHome extends React.Component{
    render(){
        return(

        <div >

            <div className="container ">
            <div className="row "> 

                    <div   id="imgInicial" className="col-sm-3 "> 
                        <Link to='/produtos'  >
                            <img className="img-fluid" src={automoveis } onmouseout="imagem_produtos(this)"/>
                            <br/>
                            <p className="text-secondary ">Automotivos</p>
                        </Link>
                    </div>

                    <div id="imgInicial" className="col-sm-3 ">
                        <Link to='/produtos'id="imga" >
                            <img className="img-fluid" src={ notebook } onmouseout="imagem_produtos(this)"/>
                            <br/>
                            <p className="text-secondary " >Informática</p> 
                        </Link> 
                    </div>

                    <div id="imgInicial" className= "col-sm-3">
                        <Link to='/produtos' id="imga"  >
                            <img className="img-fluid"src={ smartfone}/>
                            <br/>
                            <p className="text-secondary " >Smarthones </p>
                        </Link>
                    </div>

                    <div id="imgInicial" className="col-sm-3">
                        <Link to='/produtos' id="imga"  >
                            <img className="img-fluid"src={ utilidade }  onmouseout="imagem_produtos(this"/>
                            <br/> 
                            <p className="text-secondary "> Ultilidades Domésticas </p>
                        </Link> 
                    </div>

                    <div id="imgInicial" className="col-sm-3">
                        <Link to='/produtos' id="imga"  >
                            <img className="img-fluid" src={ bebida }  onmouseout="imagem_produtos(this)"/>
                            <br/>
                            <p className="text-secondary" >Bebidas </p>
                        </Link>
                    </div>

                    <div id="imgInicial" className="col-sm-3">
                        <Link to='/produtos' id="imga"  >
                            <img className="img-fluid"src={ audio }  onmouseout="imagem_produtos(this)"/>
                            <br/>
                            <p className="text-secondary" >Audio</p> 
                        </Link>
                    </div>

                    <div id="imgInicial" className="col-sm-3">
                        <Link to='/produtos' id="imga"  >
                            <img className="img-fluid"src={ decoracao }  onmouseout="imagem_produtos(this)"/>
                            <br/>  
                            <p className="text-secondary "> Decoração </p>
                        </Link> 
                    </div>

                    <div id="imgInicial" className="col-sm-3">
                        <Link to='/produtos' id="imga"  >
                            <img className="img-fluid"src={ eletroportateis }  onmouseout="imagem_produtos(this)"/>
                            <br/> 
                            <p className="text-secondary " >Eletroportáteis </p>
                        </Link> 
                    </div>
                    
            </div>
            </div>
        </div>

        )  
    }
};

export default ProdutosHome;