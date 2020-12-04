import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';/*importaçao do modo Route*/
import Main from './pages/home/index';
import Produtos from './pages/produtos/index';
import Lojas from './pages/lojas/index';
import Contatos from'./pages/contatos/index';

export default function Routes() {

    return(
        <BrowserRouter> 
            <Switch>

                <Route path="/" exact component={Main} /> 
                <Route path="/produtos" component={Produtos} />
                <Route path="/nossas-lojas" component={Lojas} />  
                <Route path="/contato" component={Contatos} />   

            </Switch>

        </BrowserRouter>
    )

 };
    