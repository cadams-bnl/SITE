import React, {useState} from 'react';


const colors = [ 'red', 'green', 'blue']

function Notes() {
    const [colorIndex, setColorIndex] = useState(0);

    return(
        <div>
            <button style={{color: colors[colorIndex % 3]}} onClick={() => setColorIndex(colorIndex + 1)}>
                Color button
            </button>
        </div>
    )
}
export default Notes;
