import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrafficLights from './TrafficLights'
import StockMessage from './StockMessage'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <TrafficLights/>
            <StockMessage/>
        </div>
    )
}

export default Content;