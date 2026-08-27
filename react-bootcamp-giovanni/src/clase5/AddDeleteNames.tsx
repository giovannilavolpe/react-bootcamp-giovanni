import { useState } from "react"

function AddDeleteNames () {

    const NAMES = [
        {id: 1, name: "Tobias"},
        {id: 2, name: "Gonza"}, 
        {id: 3, name: "Jeremias"},
        {id: 4, name: "Barua"},
        {id: 5, name: "Giovanni"}]

    const [names, setNames] = useState(NAMES)
    const [nameInput, setNameInput] = useState("")

    const removeItem = (id: number) => {
        const namesAfterRemove = names.filter((item) => item.id !== id);
        setNames(namesAfterRemove);
    }

    const addNewName = () => {
        if (nameInput.trim() === "") {
            return;
        }

        const newId = Math.max(...names.map((item) => item.id)) + 1;
        const newName = {id: newId, name: nameInput};
        setNames([...names, newName]);
        setNameInput("");
    }

    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {names.map((item) =>
                <li key={item.id} style={{ listStyle: 'none', backgroundColor: '#ffb0d7', borderRadius: '20px', color: 'black', width: '100%' }}>
                    <p style={{ marginTop: '26px' }}>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <button onClick={() => removeItem(item.id)}> Remove ID</button>
                </li>
                )}
            </ul>
            <div>
                <input 
                    type="text" 
                    value={nameInput} 
                    placeholder="Escribe un nombre" 
                    onChange={((e) => setNameInput(e.target.value))}
                    />
                <button onClick={addNewName}>Agregar Nombre</button>
            </div>
        </div>
    )

}

export default AddDeleteNames