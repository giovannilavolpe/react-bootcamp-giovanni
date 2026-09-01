import { useContador } from "./Context"

function CounterContext() {
    
    const {incrementar, contador} = useContador()
  return (
      <section>
        <p>{contador}</p>
        <button onClick={incrementar}> + Incrementar</button>
      </section>
      )
}

export default CounterContext