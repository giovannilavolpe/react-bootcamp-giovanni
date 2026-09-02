import '../App.css'
import Counter from '../clase10/Counter';
import InfoTask from './TaskList';
import { ThemeProvider } from './UseLocalStorage';
import ThemeButton from './UseLocalStorageContext';

function Content() {
    
    return(
        <div>
            <ThemeProvider>
                <ThemeButton>
                    <InfoTask texto="Hacer el ejercicio" priority="alta"/>
                    <InfoTask texto="Hacer commit" priority="alta"/>
                    <InfoTask texto="Pushear" priority="alta"/>
                    <InfoTask texto="Ver tiktok" priority="baja"/>
                    <Counter initialValue={1000}/>
                </ThemeButton>
            </ThemeProvider>
                
        </div>
    )
}

export default Content;