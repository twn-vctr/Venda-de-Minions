import styled from 'styled-components';

export const FinalizarContainer = styled.div`
    padding: 120px 10% 0px 10%;
    display: flex;
`;

export const ProdutosContainer = styled.div`
    width: 100%;
    padding: 20px;
    border: 2px solid #01aeea;
    box-shadow: 3px 10px #fece00;
    border-radius: 30px;
    form {
        padding-top: 20px;
        input, textarea, button {
            width: 100%;
            border: none;
            padding: 13px 5px;
            outline-style: none;
            margin: 5px 0;
            font-size: 16px;
            font-weight: bold;
            color: #665756;
        }

        textarea {
            height: 120px;
        }

        button {
            background-color: #fece00;
            box-shadow: 3px 5px #01aeea;
            color: #01aeea;
            border-radius: 25px;
        }
    }
`;
//border-bottom: 4px solid #01aeea;
export const Produtos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
        margin: 5px 0;
        color: #01aeea;
    }
`; 