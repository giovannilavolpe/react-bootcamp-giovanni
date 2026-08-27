import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../App.css'
import Email from './Email'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div>
            <Email/>
        </div>

    )
}

export default Content;