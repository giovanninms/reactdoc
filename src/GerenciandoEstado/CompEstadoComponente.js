import { useState } from "react"
import App from "../iniciandoDoc/App.css"

function Panel ({title, children, isActive, onShow}){
    return(
        <section>
        <h3>{title}</h3>
        {isActive ? (
            <p>{children}</p>
        ) : (
            <button onClick={onShow}>
                Ver Mais
            </button>
        )}
    </section>
    )
}

function CompEstadoComponente (){
    const [activeIndex, setActiveIndex] = useState(false)
    return(
        <div className="Home">
            <h2>Almaty, Cazaquistão</h2>
            <Panel title={"Sobre"} isActive={activeIndex === 0} onShow={()=>setActiveIndex(0)}>
            Com uma população de cerca de 2 milhões de habitantes, Almaty é a maior cidade do Cazaquistão. De 1929 a 1997, foi sua capital.
            </Panel>
            <Panel title={"Etmologia"} isActive={activeIndex === 1} onShow={()=> setActiveIndex(1)}>
            O nome vem de <span lang="kk-KZ">алма</span>, a palavra cazaque para "maçã", e é frequentemente traduzido como "cheio de maçãs". De fato, acredita-se que a região em torno de Almaty seja o lar ancestral da maçã, e o<i lang="la"> Malus sieversii</i> selvagem é considerado um provável candidato a ancestral da maçã doméstica moderna.
            </Panel>
        </div>
    )
}



export default CompEstadoComponente