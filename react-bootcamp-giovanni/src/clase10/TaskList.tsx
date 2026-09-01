import { useState } from "react"

type InfoTaskProps = {
    texto: string
    priority: "baja" | "media" | "alta"
}

function useToggle(initialValue = false) {
    const [deploy, setDeploy] = useState(initialValue)

    const toggle = () => {
        setDeploy((prevState) => !prevState)
    }

    return { deploy, toggle }
}

function InfoTask({ texto, priority }: InfoTaskProps) {
    const { deploy, toggle } = useToggle(false)

    return (
        <div style={{ marginBottom: "80px" }}>
            <div>
                <span style={{ color: "white", fontSize:"30px", marginRight: "20px" }}>
                    {texto}
                </span>
                <span>PRIORIDAD: {priority}</span>
            </div>
            <button type="button" onClick={toggle} >
                {deploy ? "Ocultar información" : "Mostrar información"}
            </button>

            {deploy && (
                <div >
                    Acabas de desplegar esta tarea. Pulsa denuevo para cerrar.
                </div>
            )}
        </div>
    )
}

export default InfoTask