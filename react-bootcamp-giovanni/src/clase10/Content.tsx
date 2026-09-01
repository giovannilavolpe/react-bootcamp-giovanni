import '../App.css'
import InfoTask from './TaskList';


function Content() {
    
    return(
        <div>
            <InfoTask texto="Hacer el ejercicio" priority="alta"/>
            <InfoTask texto="Hacer commit" priority="alta"/>
            <InfoTask texto="Pushear" priority="alta"/>
            <InfoTask texto="Ver tiktok" priority="baja"/>
        </div>
    )
}

export default Content;