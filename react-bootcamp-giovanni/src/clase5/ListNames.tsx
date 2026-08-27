import { useState } from "react"

function ListNames () {

    const NAMES = [
        {id: 1, name: "Tobias"},
        {id: 2, name: "Gonza"}, 
        {id: 3, name: "Jeremias"},
        {id: 4, name: "Barua"},
        {id: 5, name: "Giovanni"},]

        const [names, useNames] = useState(NAMES)

    return (
        <ul style={{ listStyle: 'none'}}>
            {names.map((item) =>
            <li key={item.id} style={{ listStyle: 'none', backgroundColor: '#d89eff', borderRadius: '20px', color: 'black', width: '20%' }}>
                <p style={{ marginTop: '26px' }}>ID: {item.id}</p>
                <p>Name: {item.name}</p>
            </li>
            )}
        </ul>
    )

}

export default ListNames