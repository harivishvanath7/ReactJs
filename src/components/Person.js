import React from 'react'

function Person({person}) {
  return (
    <div>{
         <h2>I am {person.name} and My age is {person.age} and My skill is {person.skill} </h2> 
   }
   </div>
  )
}

export default Person
