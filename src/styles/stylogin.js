import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    img {
        width: 20vw;
        height: 50vh;
    }

    @media(max-width: 650px) {
        img {
            margin-top: 30%;
            width: 100vw;
            height: 70vh;
        }
    }
`;

export const FormContainer = styled.form`
    width: 40vw;
    height: 40vh;
    background-color: white;
    display: flex;
    border-radius: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1, a {
        font-family: 'Open Sans', cursive;
        color: #01aeea;
    }
    h1 {
        font-size: 30px;
        margin-top: -20;
        border-bottom: 4px solid #01aeea;
        margin-bottom: 10px;
        padding: 10px 0;
    }
    a {
        padding-top: 10px;
        cursor: pointer;
    }
    input, button {
        width: 90%;
        border: none;
        border-radius: 25px;
        padding: 13px 5px;
        box-shadow: 3px 5px #01aeea;
        outline-style: none;
        background-color: #fece00;
        color: #01aeea;
        margin: 5px 0;
        font-size: 16px;
        font-weight: bold;
    }
    input {
        text-align: center;
        
        ::placeholder {
            color: #7ba9d1;
        }
    }
    button {
        margin-top: 20px;
        cursor: pointer;
    }
    button:hover {
        background-color: #dbd437;
    }

    @media(max-width: 650px) {
        margin-top: 30%;
        width: 100vw;
        height: 70vh;
    }
`;