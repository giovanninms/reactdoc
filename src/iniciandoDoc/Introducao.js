import { useState } from "react"
    import "./App.css"

//Introdução no React aprendendo criar e aninhar componente, adicinar marcação, adicinar estilo, exibir dados, renderizar condicinal, renderizar lista, responder eventos, atualizar tela,  usar Hooks, compartilahar dados entre componentes
function Botao({ onClick, count }) {

    return ( // criando componente e Aninhando Componente
        <button onClick={onClick}>
            Entrar - Contagem {count}X
        </button>)
}

export function Perfil() {
    const Usuario = {
        nome: "Dogguinho",
        imagemUrl: "https://i.imgur.com/KYTJocv_d.webp?maxwidth=760&fidelity=grand",
        imagemSize: 90
    }
    return (
        /*Marcação JSX*/<>
            {<h1>{Usuario.nome}</h1> /*Exibindo dados*/}
            <img src={Usuario.imagemUrl} alt={'Foto de ' + Usuario.nome} className="avatar" style={{
                width: Usuario.imagemSize,
                height: Usuario.imagemSize
            }} />
        </>
    )
}

function Lista() {
    const produtos = [ //Renderezando lista
        { Nome: "Maça", eFruta: true, id: 1 },
        { Nome: "Banana", eFruta: true, id: 2 },
        { Nome: "Limão", eFruta: true, id: 3 },
        { Nome: "Melão", eFruta: true, id: 4 },
        { Nome: "Alface", eFruta: false, id: 5 }
    ]
    const listaItens = produtos.map(produto =>
        <li key={produto.id} style={{
            color: produto.eFruta ? 'magenta' : 'darkgreen' //Renderizando condicional
        }}>
            {produto.Nome}
        </li>
    )

    return (
        <ul>
            {listaItens}
        </ul>
    )
}

function Introdução() {
    const [count, setCount] = useState(0) //atualizando tela e usando hooks
    function ativaALert() { //respondendo eventos
        setCount(count + 1)
        //alert("Evento dentro do componente! Click no botão.")
    }
    return (
        <div className="App">
            <div className="introducao">
                <Perfil />
                <h2>Bem vindo ao primeiro componente do React</h2>
                <Lista />
                <Botao count={count} onClick={ativaALert} />
                <Botao count={count} onClick={ativaALert} />
            </div>
        </div>
    )
}

export default Introdução