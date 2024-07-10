const dataHoje = new Date()

function FormatandoData({data}) {
    return  new Intl.DateTimeFormat('pt-BR', {weekday: "long"}).format(data)
}

function DataFormatada(){
    return(
        <h3>Hoje é {FormatandoData(dataHoje)}</h3>
    )
}

export default DataFormatada