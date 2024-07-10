import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import JogoDaVelha from './iniciandoDoc/Board'
import FiltroProdutosExp from './iniciandoDoc/FiltroProdutos'
import Introdução from './iniciandoDoc/Introducao'
import DescrevendoUI from './DescrevendoUI/DescrevendoUI'
import Home from './Home'

function Rotas() {
    return(
        <>
        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/jogodavelha" component={JogoDaVelha} exact/>
            <Route path="/filtroproduto" component={FiltroProdutosExp} exact/>
            <Route path="/introducao" component={Introdução} exact/>
            <Route path="/descrevendoui" component={DescrevendoUI} exact/>
        </BrowserRouter>
        </>
    )
}

export default Rotas  