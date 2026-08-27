import { useEffect, useState } from "react";


const nombres = [
  { name: "Giovanni", email: "giovanilavolpe@gm2dev.com" },
  { name: "Tobias", email: "tobiasmanquez@gm2dev.com" }
];

function Email() {

    const [names, setNames] = useState(nombres);
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    useEffect(() => { document.title = `Total Users: ${names.length}`;}
  , [names]);

    const formSubmit = (input: { preventDefault: () => void; }) => {
    input.preventDefault(); 
    

    if (nameInput.trim() === "" || emailInput.trim() === "") {
      return;
    }

    const newUser = { 
      name: nameInput, 
      email: emailInput 
    };

    setNames([...names, newUser]);

    setNameInput("");
    setEmailInput("");
    }

    return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={formSubmit}>
        <input 
          type="text" 
          placeholder="Nombre"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        {names.map((user) => (
          <li style={{ listStyle: 'none', backgroundColor: '#929292bb', borderRadius: '5px', color: 'black', width: '100%', marginBottom: '10px'}}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Email;
