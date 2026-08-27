import { useState } from "react";



function TrafficLights () {
    const [color, setColor] = useState("red")
    const [textToShow, setTextToShow] = useState("STOP")

      const changeState = () => {
        if (color === "red") {
          setColor ("yellow");
          setTextToShow("Caution");
        }
        else if (color === "yellow") {
            setColor("green")
            setTextToShow("Go");
        }
        else if (color === "green") {
            setColor("red");
            setTextToShow("STOP");
        }
      }


    return (
        <div>
            <button
                type="button"
                className="counter"
                style={{ width: "100px", height: "50px", backgroundColor:color, color:"black"}}
                onClick={changeState}
                >{textToShow}
            </button>
        </div>
    )
}

export default TrafficLights