import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, FormContainer } from '../styles/stylogin';
import axios from 'axios';



export default function SignUp() {
    
    const [email, setEmail] = useState('');
    const [nome, setUsername] = useState('');
    const [senha, setPassword] = useState('');
    const [confirmaSenha, setPasswordConfirmation] = useState('');
    const [clicado, setClicked] = useState(false);
    const history = useHistory();

    function sendRequest(event) {
        event.preventDefault();

        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos');
            return;
        } else if(senha !== confirmaSenha) {
            alert('As senhas não batem, por favor corrigir');
            return;
        }

        setClicked(true);

        const requestFormat = { email, nome, senha, confirmaSenha };
        const request = axios.post('https://g43qicgxzl.execute-api.us-east-2.amazonaws.com/prod/users', requestFormat);

        request.then(()=> {
            history.push('/');
        });
        
        request.catch(() => {
            alert('Esse email já foi cadastrado');
            setClicked(false);
        });
    }
    
    return (
        <Container>
            {clicado
                ? <img src='https://1.bp.blogspot.com/-yGwdq-RmR0w/VeIlxDY0HFI/AAAAAAACdGw/Bln3g2aZstg/s1600/tumblr_mr4a2pF8rL1rs6wvoo1_250.gif' />
                : <FormContainer onSubmit={sendRequest} >
                    <h1>Bora criar uma conta</h1>
                    <input
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='e-mail'
                    />
                    <input
                        type='text'
                        onChange={e => setUsername(e.target.value)}
                        value={nome}
                        placeholder='nome'
                    />
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={senha}
                        placeholder='senha'
                    />
                    <input
                        type='password'
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        value={confirmaSenha}
                        placeholder='confirme sua senha'
                    />
                    <button type='submit' >Inscrever</button>
                    <Link to='/'>Voltar para página de login</Link>
                </FormContainer>
            }
        </Container>
    );
}