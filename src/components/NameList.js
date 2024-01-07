import React from 'react'

function NameList() {

    const names = ['Bruce','Clark','Diana']
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)  // index as key (2nd parameter of the arrow function)
  return (
    <div>{ nameList }</div>
  )
}

export default NameList









