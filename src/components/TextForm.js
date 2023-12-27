import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick=()=>{
    console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text,setText]=useState('');

  const handlelowclick=()=>{
    console.log("Lowercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleclearclick=()=>{
    console.log("clear was clicked"+ text);
    let newText='';
    setText(newText);
  }

  const handleCopy=()=>{
    console.log("copied");
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied","success");
  }

  function wordlen()
  {
    
    if(text.length===0)
    {
       return 0;      
    }
    return text.split(" ").length;
  }
  
  const handleSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{wordlen()} words and {text.length} characters</p>
      <p>{0.008 * wordlen()} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it."}</p>
    </div>
    </>
  )
}
