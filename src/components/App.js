import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaginaDaLoja from '../paginas/PaginaDaLoja';
import Finalizar from '../paginas/Finalizar';
import Login from '../paginas/Login';
import SignUp from '../paginas/SignUp';
import SessaoContext from '../contexts/SessaoContext';

export default function App() {

    const [sessao, setSession] = useState({});

    return (
        <SessaoContext.Provider value={{ sessao, setSession }} >
            <Router>
                <Switch>
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/finalizar' component={Finalizar} />
                    <Route path='/pag-loja' component={PaginaDaLoja} />
                    <Route path='/' component={Login} />
                </Switch>
            </Router>
        </SessaoContext.Provider>
    );
}
