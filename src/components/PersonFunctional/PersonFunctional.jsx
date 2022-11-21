import React from 'react'

const PersonFunctional = (props) => {
    console.log(props.person)
  return (
    <span>El personaje de {props.person.name} {props.person.surname} tiene {props.person.age} años.</span>
  )
}
    export default PersonFunctional