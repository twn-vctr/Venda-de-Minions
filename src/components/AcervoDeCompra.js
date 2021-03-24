import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

export default function AcervoDeCompras(props) {

    const { product, cartController } = props;
    const { titulo, descricao, preco, productUrl } = product;
    const [quantity, setQuantity] = useState(0);


    function adicionarAoCarrinho() {
        setQuantity(quantity + 1);
        cartController(product, 'add');
    }

    function removerDoCarrinho() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            if (quantity === 1) {
                setQuantity(quantity - 1);
            }
        }
        cartController(product, 'remove');
    }

    return (
        <LojaContainer>
            <img src={productUrl} />
            <div><strong>{titulo}</strong><strong>R$ {preco}</strong></div>
            <p>{descricao}</p>
            <div>
                <BsChevronUp className='add' onClick={adicionarAoCarrinho} />
                <p>{quantity > 0 ? quantity : ''}</p>
                <BsChevronDown className='remove' onClick={removerDoCarrinho} />
            </div>
        </LojaContainer>
    );
}

const LojaContainer = styled.main`
    height: 300px;
    width: 20%;
    border: 4px solid #01aeea;
    box-shadow: 4px 6px #fece00;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px 2.5%;
    position: relative;

    img {
        width: 100%;
        height: 65%;
    }
    
    strong, p {
        padding: 5px;
        color: #30323D;
        font-size: 13px;
    }
    div {
        display: flex;
        justify-content: space-between;
        p {
            margin-top: 6px;
            position: absolute;
            bottom: 5px;
            left: 47%;
        }
    }
    svg {
        padding: 5px;
        font-size: 30px;
        font-weight: bold;
        color: #fece00;
        cursor: pointer;
        &.add {
            position: absolute;
            bottom: 5px;
            left: 5px;
        }
        &.remove {
            position: absolute;
            color: #fece00;
            right: 5px;
            bottom: 5px;
        }
    }

    
    @media(max-width: 650px) {
        width: 95%;

        img {
            height: 72%;
        }
    }
`;