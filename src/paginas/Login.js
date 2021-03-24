import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';
import SessaoContext from '../contexts/SessaoContext';
import { Container, FormContainer } from '../styles/stylogin';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [clicado, setClicked] = useState(false);
    const { session, setSession } = useContext(SessaoContext);
    const [userId, setUserId] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (email.length <= 3) return;

        const request = axios.get('https://g43qicgxzl.execute-api.us-east-2.amazonaws.com/prod/users');
        request.then(response => {
            const user = response.data.find(e => e.email === email);

            if (user) setUserId(user.userId);
        });
    }, [email]);
    
    function sendRequest(event) {
        event.preventDefault();

        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos');
            return;
        } else if (!userId) {
            alert('O usuário atual ainda não está registrado');
            return;
        }

        setClicked(true);

        const requestFormat = { email, senha, userId };
        const request = axios.post('https://g43qicgxzl.execute-api.us-east-2.amazonaws.com/prod/log-in', requestFormat);
        request.then(response => {
            const { userId, email, token } = response.data;
            setSession({ ...session, userId, email, token });
            history.push('/pag-loja');
        });
        request.catch(() => {
            alert('email inválido');
            setClicked(false);
        });
    }

    return (
        <Container>
            {clicado
                ? <img src='https://1.bp.blogspot.com/-yGwdq-RmR0w/VeIlxDY0HFI/AAAAAAACdGw/Bln3g2aZstg/s1600/tumblr_mr4a2pF8rL1rs6wvoo1_250.gif' />
                : <FormContainer onSubmit={sendRequest} >
                    <h1>Entre!</h1>
                    <DebounceInput
                        type='email'
                        minLength={3}
                        debounceTimeout={300}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='e-mail'
                    />
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={senha}
                        placeholder='senha'
                    />
                    <button type='submit' >Entrar</button>
                    <Link to='/sign-up'>Ainda não tem conta? Clique aqui</Link>
                </FormContainer>
            }
        </Container>
    );
}