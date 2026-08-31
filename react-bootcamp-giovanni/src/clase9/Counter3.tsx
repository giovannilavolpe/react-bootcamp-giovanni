import { useContadorStore } from "./Zustand";


function Counter3() {

  const contador = useContadorStore((state) => state.contador)

  const incrementar = useContadorStore((state) => state.incrementar);
  const decrementar = useContadorStore((state) => state.decrementar);


  return (
      <section>
        <button
          type="button"
          className="counter"
          onClick={() => incrementar()}
          >
          Pulsa aquí para sumar
        </button>
        <span style={{ margin: "15px"}}>{contador}</span>
        <button
          type="button"
          className="counter"
          onClick={() => decrementar()}
          >
          Pulsa aquí para restar
        </button>
      </section>
      )
}

export default Counter3

