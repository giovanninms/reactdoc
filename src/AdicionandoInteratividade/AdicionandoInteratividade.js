

function Botao() {
    return (
        <button onClick={() => {
            alert('Botão Clicado!')
        }}>
            Click no botão
        </button>
    )
}

function AlertBotao({ children, message }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
function BotaoPlay({ nomeFilme }) {
    return (
        <Button onClick={() => alert(`Reproduzindo ${nomeFilme}`)}>
            Reproduzir "{nomeFilme}"
        </Button>
    )
}

function BotaoUpload() {
    return (
        <Button onClick={() => alert('Enviando')}>
            Enviar Menssagem
        </Button>
    )
}



function Toolbar({ onPlay, onUpload }) {
    return (
        <div >
            <h2>Toolbar</h2>
            <Button onClick={onPlay}>
                Reproduzir Filme
            </Button>
            <Button onClick={onUpload}>
                Enviar Foto
            </Button>
        </div>
    )
}

function AdicionandoInteratividade() {
    return (
        <div className="App">
            <Botao />
            <AlertBotao message={'Reproduzindo'}>Reproduzir video</AlertBotao>
            <AlertBotao message={'Enviando'}>Enviar menssagem</AlertBotao>
            <BotaoPlay nomeFilme="Os Sem Floresta" />
            <BotaoUpload />
            <Toolbar 
                onPlay={() =>  alert(`Reproduzindo!`) }
                onUpload={() =>  alert(`Enviado!`) } />
        </div>
    )
}

export default AdicionandoInteratividade