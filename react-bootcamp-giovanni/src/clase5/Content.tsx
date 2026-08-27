import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../App.css'
import ListNames from './ListNames'
import AddDeleteNames from './AddDeleteNames'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    </StrictMode>
)

function Content() {
    
    return(
        <div className='exercises'>
            <ListNames/>
            <AddDeleteNames/>
        </div>

    )
}

export default Content;