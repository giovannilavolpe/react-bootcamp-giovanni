import { useTheme } from "./Context"

function Theme() {
    
    const {Theme, changeTheme} = useTheme()
  return (
      <section className={Theme ? "blackMode" : "whiteMode"}>
        <p>{Theme}</p>
        <button onClick={changeTheme}> Cambie el tema</button>
      </section>
      )
}

export default Theme