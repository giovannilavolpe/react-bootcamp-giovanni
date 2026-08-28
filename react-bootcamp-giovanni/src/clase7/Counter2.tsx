import { useEffect, useState } from "react"


function Counter2() {
  const [count, setCount] = useState(0);
  useEffect(() => { document.title = `Counter: ${count}`;}
    , [count]);

  return (
      <section>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          >
          Pulsa aquí para sumar
        </button>
        <span style={{ margin: "15px"}}>{count}</span>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
          >
          Pulsa aquí para restar
        </button>
      </section>
      )
}

export default Counter2

