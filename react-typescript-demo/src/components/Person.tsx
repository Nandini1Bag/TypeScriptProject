import React from 'react'

//object props
type PersonProps={
   fullname:{
    first:string;
    last:string;
}
};

function Person(props:PersonProps) {
  return (
    <div>{props.fullname.first} {props.fullname.last}</div>
  )
}

export default Person