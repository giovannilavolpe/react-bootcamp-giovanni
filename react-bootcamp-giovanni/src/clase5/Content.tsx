import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListNames from './ListNames'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <ListNames/>
        </div>
    )
}

export default Content;