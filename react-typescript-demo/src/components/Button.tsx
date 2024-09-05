//Event props
type ButtonProps={
   // handleClick:()=>void;//no parameters
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:Number)=>void;//event as parameters
}

function Button(props:ButtonProps) {
  return <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
}

export default Button