//Union Types
type StatusProps={
    status: 'Error'|'Loading'|'Success';
}
function Status(props:StatusProps) {
    let message;
  if(props.status==='Loading'){
    message = 'Loading...';
  }else if (props.status==='Error'){
    message = 'Error';
  }else{
    message = 'Success';
  }
  return (
    <div>
        <h1>Status- {message}</h1>
    </div>
  )
}

export default Status