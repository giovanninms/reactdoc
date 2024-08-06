import React from "react"

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
                <li>
                    <a href="/introducao">Introdução</a>
                </li>
                <li>
                    <a href="/jogodavelha">Jogo da velha</a>
                </li>
                <li>
                    <a href="/filtroproduto">Filtro de produtos</a>
                </li>
                <li>
                    <a href="/descrevendoui">Descrevendo UI</a>
                </li>
                <li>
                    <a href="/adicionandointeratividade">Adicionando Interatividade</a>
                </li>
                <li>
                    <a href="/renderizareconfirmar">Renderizar E Confirmar</a>
                </li>
                <li>
                    <a href="/compestadocomponente">Compartilhando Estado Entre Componentes</a>
                </li>
        </div>
    )
}

export default Home