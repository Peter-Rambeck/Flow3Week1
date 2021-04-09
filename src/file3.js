import { render } from "@testing-library/react";
import React from "react";
import { persons } from "./file2";

export function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

export function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
    </div>
  );
}

const person = persons.map((e) => [
  e.firstName,
  e.lastName,
  e.email,
  e.gender,
  e.phone,
]);
// console.log(person);

export function WelcomePerson() {
  return (
    <div classname="App">
      <WelcomePerson person={person} />;
      <p>
        {person.firstName}
        {person.lastName}
      </p>
    </div>
  );
}

// export default MultiWelcome;
