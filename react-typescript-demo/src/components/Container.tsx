//style props
type ContainerProps={
    style:React.CSSProperties;
}

export default function Container(props:ContainerProps) {
  return (
    <div style={props.style}
    >Container</div>
  )
}
