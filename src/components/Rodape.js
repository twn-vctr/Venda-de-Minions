import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

export default function Rodape(props) {

    const { selectedProducts } = props;
    let precoTotal = 0;

    selectedProducts.forEach(prod => {
        precoTotal += prod.preco;
    });

    return (
        <>
            <RodapeContainter>
                <span>
                    <Link to={{ pathname: '/finalizar', state: { selectedProducts, precoTotal } }}>
                        <TiShoppingCart />
                    </Link>
                    <Link to={{ pathname: '/finalizar', state: { selectedProducts, precoTotal } }} >
                        <h1>Finalizar</h1>
                    </Link>
                </span>
                <strong>{precoTotal.toFixed(2).replace('.', ',')}</strong>
            </RodapeContainter>
        </>
    );
}

const RodapeContainter = styled.header`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    border-top: 4px solid #01aeea;
    display: flex;
    justify-content: space-between;
    padding: 10px 5%;
    height: 60px;
    z-index: 10;
    span {
        display: flex;
    }
    svg {
        color: #01aeea;
        font-size: 45px;
        cursor: pointer;
    }
    h1 {
        font-size: 32px;
        color: #01aeea;
        padding-left: 500px;
        margin-top: 5px;
        cursor: pointer;
    }
    strong {
        color: #01aeea;
        padding: 10px 0;
        
    }
`;