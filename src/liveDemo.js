import React, { useState } from "react";

export function MemberTable({ members }) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {members.map((e) => (
          <tr>
            <td>{e.name}</td>
            <td>{e.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 },
  ];
  const [members, setMembers] = useState(initialMembers);

  // return <MemberDemo members={members} />;
}
