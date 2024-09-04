
type GreetProps={
    name: string;
    count?:number;//optional type
}

function Greet(props:GreetProps) {
  const {count=0}=props;//optional type
  return (
    <div>
        <h2>
            Welcome {props.name} !! You have {count} new messages.
        </h2>
    </div>
  )
}

export default Greet