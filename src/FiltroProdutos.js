import "./App.css"
import { useState } from "react"

function BarraPesquisa({ filtroText, apenasEmEstoque, filtroTextAtivo, emEstoqueAtivo }) {
    return (
        <>
            <form>
                <input type="text" placeholder="Nome Do Produto" name="inputProduto" value={filtroText} onChange={(e) => filtroTextAtivo(e.target.value)} />
                <br />
                <label>
                    <input type="checkbox" name="emEstoque" checked={apenasEmEstoque} onChange={(e)=> emEstoqueAtivo(e.target.checked)}/>
                    {' '}
                    Apenas Produtos Em Estoque
                </label>
            </form>

        </>
    )
}


function LinhaCategoria({ categoria }) {
    return (
        <tr className="linhasCategoria">
            <td colSpan="2">
                {categoria}
            </td>
        </tr>
    )
}

function LinhaProdutos({ produto }) {
    const nome = produto.emEstoque ? produto.nome : <span style={{ color: "red" }}>{produto.nome}</span>

    return (
        <tr className="linhasProdutos">
            <td className="nomeProduto">{nome}</td>
            <td className="precoProduto">{produto.preco}</td>
        </tr>
    )
}

function TabelaProdutos({ produtos, filtroText, apenasEmEstoque }) {

    const linhas = []
    let ultimaCategoria = null

    produtos.forEach((produto) => {
        if (produto.nome.toLowerCase().indexOf(filtroText.toLowerCase()) === -1) {
            return
        }
        if(apenasEmEstoque && !produto.emEstoque){
            return
        }
        if(produto.categoria !== ultimaCategoria){
            linhas.push(<LinhaCategoria categoria={produto.categoria} key={produto.categoria}/>)
        }
        linhas.push(<LinhaProdutos produto={produto} key={produto.nome}/>)
        ultimaCategoria = produto.categoria
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody className="corpo">
                {linhas}
            </tbody>

        </table>
    )
}

const produtos = [
    { categoria: "Fruta", preco: "R$3,49", emEstoque: true, nome: "Banana" },
    { categoria: "Fruta", preco: "R$8,99", emEstoque: true, nome: "Maça" },
    { categoria: "Fruta", preco: "R$11,89", emEstoque: false, nome: "Pitaia" },
    { categoria: "Mercearia", preco: "R$4,99", emEstoque: false, nome: "Pão" },
    { categoria: "Mercearia", preco: "R$2,49", emEstoque: true, nome: "Bolacha" },
    { categoria: "Mercearia", preco: "R$4,49", emEstoque: true, nome: "leite" }
]


function FiltroProdutos({ produtos }) {
    const [filtroText, setFiltroTexto] = useState("")
    const [apenasEmEstoque, setApenasEmEstoque] = useState(false)
    return (
        <div>
            <div className="barraPesquisa">
                <h3>Filtrar Categoria</h3>
                <BarraPesquisa
                    filtroText={filtroText}
                    apenasEmEstoque={apenasEmEstoque}
                    filtroTextAtivo={setFiltroTexto}
                    emEstoqueAtivo={setApenasEmEstoque} />
            </div>
            <div className="tabelaProdutos">
                <TabelaProdutos 
                    produtos={produtos}
                    filtroText={filtroText}
                    apenasEmEstoque={apenasEmEstoque} />
            </div>
        </div>
    )
}

function FiltroProdutosExp() {
    return <FiltroProdutos produtos={produtos} />
}

export default FiltroProdutosExp