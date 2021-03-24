import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import Header from '../components/Header';
import { FinalizarContainer, ProdutosContainer, Produtos } from '../styles/styfinalizar';

export default function Finalizar() {


    const { state } = useLocation();
    const { selectedProducts, precoTotal } = state;
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setAddress] = useState('');
    const history = useHistory();

    function purchaseRequest(event) {
        event.preventDefault()
        const format = /^[0-9]{5}\-[0-9]{3}$/;

        if (!format.test(cep)) {
            alert('CEP invalido');
            return;
        } else if (email === '' || endereco === '') {
            alert('Preencha todos os campos por favor');
            return;
        }
        
        const buyFormat = { email, cep, endereco, precoTotal, 'produtos': selectedProducts };

        const request = axios.post('https://g43qicgxzl.execute-api.us-east-2.amazonaws.com/prod/user/products', buyFormat);
        request.then(() => {
            alert('success!');
            history.push('/pag-loja');
        })
        request.catch(() => {
            alert('Sua requisição falhou, por favor, tente de novo');
        })
    }

    return (
        <>
            <Header />
            <FinalizarContainer>
                <ProdutosContainer>
                    {selectedProducts.map((prod, i) => (
                        <Produtos key={prod.userId + 5 * i}>
                            <p>{i + 1}</p>
                            <p>{prod.titulo}</p>
                            <p>{prod.preco.toFixed(2).replace('.', ',')}</p>
                        </Produtos>
                    ))}
                    <Produtos>
                        <p>Total</p>
                        <p>{precoTotal.toFixed(2).replace('.', ',')}</p>
                    </Produtos>
                    <form onSubmit={purchaseRequest}>
                        <DebounceInput
                            type='email'
                            minLength={8}
                            debounceTimeout={300}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            placeholder='e-mail'
                        />
                        <DebounceInput
                            type='text'
                            minLength={8}
                            debounceTimeout={300}
                            onChange={e => setCep(e.target.value)}
                            value={cep}
                            placeholder='cep: 12345-678'
                        />
                        <DebounceInput
                            type='text'
                            element="textarea"
                            minLength={5}
                            debounceTimeout={400}
                            onChange={e => setAddress(e.target.value)}
                            value={endereco}
                            placeholder='endereco'
                        />
                        <button type='submit' >Comprar</button>
                    </form>
                </ProdutosContainer>
            </FinalizarContainer>
        </>
    );
}