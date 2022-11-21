import React, { Component } from "react";

export class PersonClass extends Component {
  render() {
    const person = this.props.person;
    return (
      <div>
        <span>
          PersonClass {person.name} {person.surname} {person.age}
        </span>
      </div>
    );
  }
}

export default PersonClass;