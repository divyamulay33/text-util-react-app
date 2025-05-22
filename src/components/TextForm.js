import { useState } from 'react'
import React  from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('');
     const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase","succsess");
     }
     const handleLoClick=()=>{
        let newtext2=text.toLowerCase();
        setText(newtext2)
        props.showAlert("converted to Lowercase","succsess");
     }
     const handleReClick=()=>{
        let newtext3=text.trim().replace(/\s+/g, ' ');
        setText(newtext3)
        props.showAlert("Remove extra spaces","succsess");
     }
     const handleClClick=()=>{
        setText(" ");
        props.showAlert("Clear all text","succsess");
     }
    
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const handleCpClick=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copy all text","succsess");
    }
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control"  id="mybox" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1 my-1'onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1 my-1'onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1 my-1'onClick={handleReClick}>Remove extra spaces</button>
<button className='btn btn-primary mx-1 my-1'onClick={handleClClick}>Clear Text</button>
<button className='btn btn-primary mx-1 my-1'onClick={handleCpClick}>Copy Text</button>
    </div>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}character</p>
        <p>Time required to read this document is {0.008*text.split(" ").length}Min</p>
        <h2>Preview Of Your Document</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

