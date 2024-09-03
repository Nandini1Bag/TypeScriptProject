//array can contain type of string only
//ex-const names: string[] = ["Nabendu", "Shikha", "Hriday"];
//ex2-const names: readonly string[] = ["Nabendu", "Shikha", "Hriday"];(We can also use a 
//readonly keyword, which prevents the array been changed.)
//const car: { brand: string, model: string, year: number } = {
 //   brand: "Tata",
// model: "Tiago",
//    year: 2016
  //};
//below is a example of array of objects as props
type PersonListProps={
    people: {
        first:string,
        last:string
    }[];
}

function PersonList(props:PersonListProps) {
  return (
    <div>
      {props.people.map((name)=>{
        return <div key={name.first}>{name.first} {name.last}</div>
      })}  

    </div>
  )
}

export default PersonList