import { Perfil } from "../iniciandoDoc/Introducao"
import DataFormatada from "./DataFormatada"
import getImageUrl from "./Util"
import List from "./List"
function DescrevendoUI() {
    return (
        <div className="App">
            <h1></h1>
            <Avatar size={50} person={{ name: "Harry Potter", imageId: "QapGaDV_d" }} />
            <br />
            <Avatar size={50} person={{ name: "Piccolo", imageId: "uR06bXK_d" }} />
            <DataFormatada />
            <Perfil />
            <List/>
            <PackingList />
            <ul>
                <li>Descrição do Perfil</li>
                <li>Descrição do Perfil</li>
                <li>Descrição do Perfil</li>
            </ul>
        </div>
    )
}

function Avatar({ person, size }) {
    return (
        <>
            <img src={getImageUrl(person)} alt={person.name} width={size} height={size} />
        </>
    )
}

function Item({ name, isPacked }) {
    let itemContent = name
    if (isPacked) {
        itemContent = (
            <del>
                {name + "✔"}
            </del>
        )
    }
    return( <li className="item">
       {itemContent}
        </li>)
}

        function PackingList() {
    return(
        <section>
            <h1>Lista de Embalagem da Sally Ride</h1>
            <ul>
                <Item isPacked={true} name="Traje espacial" />
                <Item isPacked={true} name="Capacete com Folha dourada" />
                <Item isPacked={false} name="Foto da Tam" />
            </ul>
        </section>
        )
}

        export default DescrevendoUI