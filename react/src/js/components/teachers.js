import React, { Component } from 'react'
import Teacher from './teacher'

//creamos un componente Teachers de react
class Teachers extends Component {
  // render nuestra funcion para imprimir contenido de un componente
  render() {
    return (
      <ul className="Teachers">
        {this.props.data.teachers.map((teacherData) => {
          return <Teacher key={teacherData.id}{...teacherData}/>
        })}
      </ul>
    )
  }
}
export default Teachers