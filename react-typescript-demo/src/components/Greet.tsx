
type GreetProps={
    name: string;
    count:number;
}

function Greet(props:GreetProps) {
  return (
    <div>
        <h2>
            Welcome {props.name} !! You have {props.count} new messages.
        </h2>
    </div>
  )
}

export default Greet