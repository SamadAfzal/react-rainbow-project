import React, { useState } from "react";
// Make sure to import the component we just built:
import ColorBlock from './colorBlock'
import ColorForm from "./ColorForm";

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })


    /* Tried using the code from the hw- gives me a parsing error. Best practice did not prevail. */

    
    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )

}


export default App;
