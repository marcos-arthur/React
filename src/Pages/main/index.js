import React, { Component, useEffect } from 'react';
import api from '../../services/api';

//Entender pq o .css não atualiza automaticamente
import './styles.css';

export default class MainPage extends Component{
    state = {
        products : [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };
    
    render(){
        const { products, page, productInfo } = this.state;
        console.log(productInfo.pages);
        console.log(page);
    return (
        <div className="productList">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href="">Acessar</a>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
            </div>
        </div>
    );
    }
}

// const MainPage = () => (

//     <h1>Hello New World</h1>
// );

// export default MainPage





//Aprender a usar hooks[]

// const Header = () => (
    
//     useEffect(() => {
//         async function loadProducts(){
//             const response = await api.get('/products')

//             console.log(response);
//         }

//         // this.loadProducts();
//     }, []),

//     this.loadProducts(),

//     <header id="main-header">JSHunt</header>
// );

// export default Header;