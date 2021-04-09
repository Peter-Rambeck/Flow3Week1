import logo from "./logo.svg";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import personData from "./file2";
import { males, females } from "./file2";
import { MultiWelcome, WelcomePerson } from "./file3";

const person = personData;
// console.log(person);
// const { firstName, email } = person;
// console.log(firstName, email);

// eslint - disable - next - line;

console.log(...males, ...females);
const females2 = ["Kurt", "Helle"];
const all = [...males, ...females2, ...females];
all.push("Tina");
// console.log(all);

// ex: 6:
const friends = [...males, ...females].join(", ");
console.log("Friends: " + friends);

const { email, firstName, gender, lastName } = person;
console.log(
  "Person: " +
    email +
    " " +
    firstName +
    " " +
    friends +
    " " +
    gender +
    " " +
    lastName
);

function App() {
  return (
    <div className="App">
      <h2>Ex2</h2>
      <p>Firstname: {firstName}</p>
      <p>Email: {email}</p>
      <hr></hr>
      <p>{text2}</p>
      <p>{upper(text3)}</p>
      <h2>Ex3</h2>
      <MultiWelcome />
      <WelcomePerson />
    </div>
  );
}

export default App;
