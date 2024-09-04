//children type props
type HeadingProps={
    children:string;
}
function Heading(props:HeadingProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Heading