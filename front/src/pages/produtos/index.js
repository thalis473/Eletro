import React from 'react';

import Menu from '../../component/menu/menu';
import Footer from '../../component/footer/footer';

import Products from '../../component/products/products';
import Banner from '../../component/banner/banner';
import Pagamento from '../../component/pagamento/pagamento';

function Produtos(){

    return(

        <div >
<Menu />
<Banner />
<br/>

<Products />
<br/>
<Pagamento />
<Footer/>
</div>
    )
}

export default Produtos;