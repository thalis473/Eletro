import Comentarios from "../comentarios/comentarios";



   export default function Formulario3() {
   

        const controleEnvio = async(evento) => {
           /* evento.preventDefault();*/
    
            const url = "http://localhost/testePHP/backeletroRecodeJoin/apiformulario.php";
            const dados = new FormData(evento.target);/* FormData nao pode mudar*/
            const cabecalho = {
                method: "POST", /*explicando e metodo de envio*/
                body: dados, /* variavel dados*/
            };
             
            const resposta = await fetch(url, cabecalho);
            const resultado = await resposta;
           
        };
                           
        return(     
        
        <div>

            <form onSubmit={controleEnvio} >

                <div className="container form-row text-uppercase text-info">
                    <div className="form-goup col-sm ">
                        <br/>
                        <label for="nome"> <b>Nome</b> </label>
                        <input id="nome" type="text"  className="form-control" name="nome" placeholder="digite aqui" 
                        />
                    </div>

                    <div className="form-goup col-sm">
                        <br/>
                        <label for="sobrenome"> <b>Sobrenome</b></label>
                        <input id="sobrenome" type="text" className="form-control" name="sobrenome" placeholder="sobrenome"/>
                    </div>
                </div>
                    
                <div className=" container form-row text-uppercase text-info">
                        <div className="form-goup col-sm">
                        <br/>
                        <label for="Cidade"> <b>Cidade</b></label>
                        <input id="cidade" type="text" className="form-control" name="cidade" placeholder="cidade" 
                        />
                    </div>

                    <div className="form-group col-sm">
                        <br/>
                        <label for="telefone"><b>Telefone</b></label>
                        <input id="telefone" type="number" className="form-control" name="numero" placeholder="(ddd)xxx-xxx " 
                        />
                        </div>
                </div>

                <div className=" container form-row justify-content-center text-uppercase text-info">
                    <div className="form-group ">
                        <br/>
                        <label for="comentario"><b>Comentário</b></label>
                        <br/>
                    <textarea id="comentario" type="text" rows="6" cols="38" name="msg" placeholder="comente aqui" >
                    </textarea>
                    </div>                    
                </div>
                    <hr/>
                    <div className="container form-row justify-content-center">
                     <button  id="btn" type="submit"  className="btn btn-primary" >Enviar</button> 

                </div>
                <br/><br/><br/>
            </form>
            <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">

                    <Comentarios />
            
                </div>
            </div>
        </div>
        )
    };
