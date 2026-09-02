import { useState } from "react"

interface CounterProps {
    initialValue: number
}

function useContador(initialValue: number) {
  const [count, setCount] = useState(initialValue)

  const increase = () => {
    setCount((count) => count + 1)
  }

  const decrement = () => {
    setCount((count: number) => count - 1)
  }

  const restart = () => {
    setCount(initialValue)
  }

  return {
    count,
    increase,
    decrement,
    restart
  }
}

function Counter({initialValue}: CounterProps) {
  const {
    count,
    increase,
    decrement,
    restart
  } = useContador(initialValue)

  return (
    <section>
      <button
        type="button"
        className="counter"
        onClick={increase}
      >
        Pulsa aquí para sumar
      </button>

      <span style={{ margin: "15px" }}>{count}</span>

      <button
        type="button"
        className="counter"
        onClick={decrement}
      >
        Pulsa aquí para restar
      </button>

      <button
        type="button"
        className="counter"
        onClick={restart}
        style={{margin: '20px'}}
      >
        restart
      </button>
    </section>
  )
}

export default Counter