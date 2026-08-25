import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from "./Counter"
import Like from './Like'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <Counter/>
            <Like/>
        </div>
    )
}

export default Content;