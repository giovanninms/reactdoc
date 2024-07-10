import { Perfil } from "../iniciandoDoc/Introducao"
import DataFormatada from "./DataFormatada"
import getImageUrl from "./Util"
function DescrevendoUI() {
    return (
        <div className="App">
            <h1></h1>
            <Avatar size={80} person={{name: "Harry Potter", imageId:"QapGaDV_d.webp"}}/>
            <br/>
            <Avatar Size={40} person={{name:"Piccolo", imageId: "uR06bXK_d.webp"}}/>
            <DataFormatada/>
            <Perfil />
           <PackingList/>
            <ul>
                <li>Descrição do Perfil</li>
                <li>Descrição do Perfil</li>
                <li>Descrição do Perfil</li>
            </ul>
        </div>
    )
}

function Avatar({person, size}){
    return(
        <>
            <img src={getImageUrl(person)} alt={person.name} width={size} height={size} />
        </>
    )
}

function Item({name, isPacked}){
    if (isPacked) {
        return <li className="item">{name} ✔</li>
    }
    return <li className="item">{name}</li>
}

function PackingList() {
    return(
        <section>
            <h1>Lista de Embalagem da Sally Ride</h1>
            <ul>
                <Item isPacked={true} name="Traje espacial"/>
                <Item isPacked={true} name="Capacete com Folha dourada"/>
                <Item isPacked={false} name="Foto da Tam"/>
            </ul>
        </section>
    )
}

export default DescrevendoUI