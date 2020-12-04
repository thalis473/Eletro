import React from 'react';
import Menu from '../../component/menu/menu';
import Footer from '../../component/footer/footer';
import Banner from '../../component/banner/banner';
import ProdutosHome from '../../component/produtosHome/produtosHome';
import Pagamento from '../../component/pagamento/pagamento';






function Main(){

  return(

    <div  >

    <Menu />
    <div class=" text-dark ">
      <Banner />
      <br/>
      <h2>Bem vindo(a)!</h2>
      <p>Aqui na nossa loja os <em>programadores tem desconto</em> para sua casa!</p>
      <br/>

      <div class="container">
        <div class="row">
          <div class="col-sm-3 bg-white text-muted mx-auto">
            <h2>Aproveite a Variedade!</h2>
            <svg width="100px" height="100px" viewBox="0 0 16 16" className="bi bi-cart4 " fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <ProdutosHome />
      <br/><br/><br/><br/><br/>
<div>

<div>


</div>



</div>

      </div>
      <Pagamento />
      <Footer/>

    
    </div>

  );
};

export default Main;