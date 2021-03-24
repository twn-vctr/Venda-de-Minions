import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import SessaoContext from '../contexts/SessaoContext';

export default function Header() {

    const [clicado, setClicked] = useState(false);
    const { setSession } = useContext(SessaoContext);
    const history = useHistory();

    function sair() {
        setSession({});
        history.push('/');
    }

    return (
        <>
            <HeaderContainter>
            <Link to='/pag-loja'><h1>Venda de Minions</h1></Link>
                {clicado
                    ? <BsChevronDown onClick={() => setClicked(!clicado)} />
                    : <BsChevronUp onClick={() => setClicked(!clicado)} />
                }
            </HeaderContainter>
            <Menu clicked={clicado} >
                <a onClick={sair}>Sair</a>
            </Menu>
        </>
    );
}

const HeaderContainter = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #01aeea;
    padding: 20px;
    z-index: 10;
    h1 {
        font-size: 32px;
        color: #01aeea;
    }
    
    svg {
        font-size: 20px;
        color: #01aeea;
        transform: scale(1);
        transition: top .5s ease-in-out;
        margin-right: 20px;
    }

    svg:hover {
        width: 32px;
        height: 32px;
        border-radius: 25px;
        background-color: white;
    }

    @media(max-width: 600px) {
        svg {
            margin-right: 8px;
        }
    }
    
`;

const Menu = styled.nav`
    position: fixed;
    right: 0px;
    top: ${props => props.clicked ? '65px' : '0px'};
    background-color: #01aeea;
    border-radius: 0 0 0 5px;
    z-index: 1;
    transition: top .5s ease-in-out;
    padding: 10px 40px;
    a {
        display: block;
        color: white;
        padding-top: 8px;
        cursor: pointer;
    }
`;

//<Link to='/'>sair</Link>