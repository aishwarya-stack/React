import React from 'react'

// function Greet()
// {
//     return <h1>Hello Aishwarya</h1>
// }
const Greet = (Props) =>
{ 
return <h1> hello {Props.name}  aka {Props.heroName} </h1>
}
export default Greet