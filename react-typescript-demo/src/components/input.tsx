type InputProps={
    value:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

function Input(props:InputProps) {
    const handleonChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);
    }
  return (
    <input type="text" value={props.value} onChange={handleonChange}/>
  )
}

export default Input