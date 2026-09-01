import '../App.css'
import CountDown from './Countdown';
import Counter2 from './Counter2';


function Content() {
    
    return(
        <div>
            <Counter2/>
            <CountDown initialSeconds={15}/>
        </div>
    )
}

export default Content;