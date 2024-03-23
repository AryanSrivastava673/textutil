import React,{useState} from 'react'


export default function TextForm(props) {
    const handleChange = (event)=>{
        setText(event.target.value)
        
    }

    const handleClick = ()=>{
        const newText=Text.toUpperCase()
        setText(newText)
        props.callAlert(" Text converted to Uppercase.","success")
    }

    const [Text,setText] = useState('')
    return (
        <>      
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea placeholder= "Enter Text Here" className="form-control" value={Text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClick}>Change to UpperCase</button>
            <h3 className='my-3'>Counter</h3>
            <div className='mx-3'>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words, {Text.length} Characters</div>
            <h3 className='my-3'>Preview</h3>
            <div className='mx-3'>{Text}</div>
        </>
    )
}
