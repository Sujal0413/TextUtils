import React, { useState } from 'react'

export default function Textform(props) {

   

    const handleupclick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("convert to uppercase","Success")
    }

    const handleloclick = () => {
        // console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("convert to lowercase","Success")
    }

    const handleonchange = (event) => {
        // console.log("onchange");
        setText(event.target.value);
    }

    const handlecleartextclick = () => {
        let newText=('');
        setText(newText);
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container"style={{ color:props.mode ==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} id="Mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>

                <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>

                <button className="btn btn-primary mx-2" onClick={handlecleartextclick}>Clear text</button>
            </div>
            <div className="container my-3"style={{ color:props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split (" ").length-1} words and {text.length} character</p>
                <p>{0.008*text.split (" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
