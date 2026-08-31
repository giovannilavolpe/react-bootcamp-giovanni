import { useState } from 'react'
import { useNameAndPassword } from './ZustandForm'

function LogIn() {
  const name = useNameAndPassword((state) => state.name)
  const password = useNameAndPassword((state) => state.password)

  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');


  const register = useNameAndPassword((state) => state.register)

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    register(nameInput, passwordInput)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Name"
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <span>USUARIO: {name}</span>
        <span>PASSWORD: {password}</span>
      </div>
    </div>
  )
}

export default LogIn
