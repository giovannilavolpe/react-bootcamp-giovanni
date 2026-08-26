import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrafficLights from './TrafficLights'
import AvisoStock from './AvisoStock'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <TrafficLights/>
            <AvisoStock/>
        </div>
    )
}

export default Content;