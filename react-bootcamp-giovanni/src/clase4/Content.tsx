import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrafficLights from './Semaforo'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <TrafficLights/>
        </div>
    )
}

export default Content;