import React from 'react';


class Places extends React.Component{
    render(){
    return(       
            <div>                   
                <div className=" container ">
                    <h3 className="text-left text-primary"> São Gonçalo </h3>
                    <p className="text-left text-primary">R. João Caetano, 38 - Loja 01 - Alcantara</p>
                    <p className="text-left text-primary">RJ, 24710-405 </p>
                    <p className="text-left text-primary">Horário: 7:00 as 18:00</p>
                    <p className="text-left text-primary"> Telefone: (21) 2701-7388</p>
                </div>
                <br/>
                <div className="container">
                    <h3 className="text-left text-primary"> Magé </h3>
                    <p className="text-left text-primary"> Av. Padre Anchieta, 137 - Centro</p>
                    <p className="text-left text-primary">RJ, 24710-405 </p>
                    <p className="text-left text-primary">Horário: 7:00 as 18:00</p>
                    <p className="text-left text-primary">Telefone: (21) 2701-7004</p>
                </div>
                <br/>
                <div className="container">
                    <h3 className="text-left text-primary">Rio de Janeiro (centro) </h3>
                    <p className="text-left text-primary"> Av. Pastor Martin Luther King Júnior, 126 Piso 1 Del Castilho </p> 
                    <p className="text-left text-primary"> RJ, 20760-005 </p>
                    <p className="text-left text-primary"> Horário: 7:00 as 18:00</p>
                    <p className="text-left text-primary"> Telefone: (21) 2701-7278 </p>
                </div>
                <br/>

                <div className="container">
                    <h3 className="text-left text-primary"> Nova Iguaçu </h3>
                    <p className="text-left text-primary"> Shopping Boulevard Rio, R. Barão de São Francisco, 236 - Vila Isabel
                    </p>
                    <p className="text-left text-primary"> RJ, 20760-005</p>
                    <p className="text-left text-primary">Horário: 7:00 as 18:00</p>
                    <p className="text-left text-primary">Telefone: (21) 2701-7688</p>
                </div>                       
            </div>
                
    );
    };
};
 
export default Places;