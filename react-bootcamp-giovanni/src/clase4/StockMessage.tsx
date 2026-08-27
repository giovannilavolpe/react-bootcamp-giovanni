import { useState } from "react";
import '../App.css'



function StockMessage () {
    const [count, setCount] = useState(0);
    const message = count >= 1 ? "disponible" : "no hay unidades"

    return (
        <section className="StockMessage">
            <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
            >
            Sumar
            </button>
            <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count - 1)}
            >
            Restar
            </button>
            <span style={{ margin: '15px' }}>{count}</span>
        <span style={{ margin: '15px' }}>{message}</span>
      </section>
    )
}

export default StockMessage