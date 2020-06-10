import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PaginaLogin from '../paginas/paginaLogin';
import PaginaCadastro from '../paginas/paginaCadastro';
import PaginaFeed from '../paginas/paginaFeed';
import PaginaPost from '../paginas/paginaPost';

export default function RouterHandler(){

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={PaginaLogin}/>
                <Route path='/cadastro' exact component={PaginaCadastro}/>
                <Route path='/feed' exact component={PaginaFeed}/>
                <Route path='/feed/:id' exact component={PaginaPost}/>
            </Switch>
        </Router>
    )
}