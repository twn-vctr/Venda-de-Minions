import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import AcervoDeCompras from '../components/AcervoDeCompra';
import Rodape from '../components/Rodape';
import { ProductList } from '../styles/styloja';

export default function PaginaDaLoja() {

    const [products, setProducts] = useState([]);
    let [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const request = axios.get('https://g43qicgxzl.execute-api.us-east-2.amazonaws.com/prod/products');

        request.then(response => {
            setProducts(response.data);
        });

        request.catch(() => {
            alert('Algo deu errado');
        });
    }, []);

    function cartController(product, type) {
        if (type === 'add') {
            setSelectedProducts([...selectedProducts, product]);
        } else {
            const index = selectedProducts.indexOf(product);
            selectedProducts.splice(index, 1);
            setSelectedProducts([...selectedProducts]);
        }
    }

    return (
        <>
            <Header />
            <ProductList>
                {products.length !== 0
                    ? products.map(produto => (
                        <AcervoDeCompras
                            product={produto}
                            cartController={cartController}
                            key={produto.userId}
                        />
                    ))
                    : ''
                }
            </ProductList>
            {selectedProducts.length !== 0
                ? <Rodape selectedProducts={selectedProducts} />
                : ''
            }
        </>
    );
}