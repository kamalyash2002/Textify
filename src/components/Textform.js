// importing the usestate hook from the react
import React , {useState} from 'react'


export default function Textform(props) {
    // function for the uppercase conversion
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Your text has been converted to Uppercase", "Sucess")
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Your text has been converted to Lowercase", "Sucess")
    }
    // here this is the event handler having the variable event as argument
    // yaha humein free mein event object bhi mil jaega
    // jsiki madad se hum present state hai variable ki voh bhi change kar payenge.
    const handleonchange = (event) => {
        // yaha humnein settext ko use karke jo present value hai box mein usse state update kardi
        setText(event.target.value);
    }

    // creating the usestate variable
    // text is the variable that is targeted and settext is the function which will change the texxt variable
    // content inside the usestate is will be value set for the variable text.
    const [text , setText] = useState('') ;
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <div className="mb-3">
            <label htmlFor="mytext" className="form-label"> <h4> {props.heading} </h4></label>
            {/* here we have to make the onchange function because we are using the text variable which is the usestate variable and to update or type in the text area we have to define the event handler for this */}
            <textarea className="form-control" id="mytext" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        {/* onchange is the event and handleonchange is the function that is listening to the event */}
        <button className="btn btn-primary mx-2" type="submit"  onClick = {handleupclick} >Convert to Uppercase</button>
        <button className="btn btn-primary" type="submit"  onClick = {handleloclick} >Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Summary</h2>
        <p>{text.split(" ").length -1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes is needed for reading by average reader</p>
    </div>
    </>
  );
}
