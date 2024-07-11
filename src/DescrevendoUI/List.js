import getImageUrl from "./Util"

const people = [{
    id: 0, name: 'Creola Katherine Johnson',
    profession: 'Matematico(a)',
    accomplishment: 'Calculos de voo espaciais',
    imageId: 'MK3eW3A'
}, {
    id: 1, name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'Quimico(a)',
    accomplishment: 'Descoberta do buraco de ozonio no Artico',
    imageId: 'mynHUSa'
}, {
    id: 2, name: 'Mohammad Abdus Salam',
    profession: 'Fisico(a)',
    accomplishment: 'Teoria do eletromagnetismo',
    imageId: 'bE7W1ji'
}, {
    id: 3, name: 'Percy Lavon Julian',
    profession: 'Quimico(a)',
    accomplishment: 'Medicamentos pioneiro de cortisona, esteroide e pilulas anticoncepicionais',
    imageId: 'IOjWm71'
}, {
    id: 4, name: 'Subrahmanyan Chandrasekhar',
    profession: 'Astrofisico(a)',
    accomplishment: 'Calcula da massa das estrelas anas brancas',
    imageId: 'lrWQx8l'
}
]


function List() {
    const listItem = people.map(person => {
        return <li key={person.id} className="perfil">
            <img src={getImageUrl(person)} alt={person.name} style={{ borderRadius: 50, width: 100, height: 100 }} />
            <div>
                <p><b>{person.name} </b> {person.profession}</p>
                <p><b>Realizações</b> {person.accomplishment}</p>
            </div>
        </li>
    })
    const quimicoList = people.filter(person =>
        person.profession === 'Quimico(a)'
    )
    const listQuimico = quimicoList.map(person => {
        return <li key={person.id} className="perfil">
            <img src={getImageUrl(person)} alt={person.name} style={{ borderRadius: 50, width: 100, height: 100 }} />
            <div>
            <p>
                <b>{person.name} </b>{person.profession}
            </p>
            <p><b>Realizações: </b>{person.accomplishment}</p>
            </div>
        </li>
    }
    )
    return (
        <>
            <h3>Lista De Quimicos</h3>
            <ul>{listQuimico}</ul>
            <h3>Lista De Cientistas</h3>
            <ul>{listItem}</ul>
        </>
    )

}

export default List