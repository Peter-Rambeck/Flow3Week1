import React, { useEffect, useState } from "react";

// https://api.chucknorris.io/jokes/random

export function UseEffectToFetch() {
  const [list, setList] = useState([]);

  const API = "https://icanhazdadjoke.com/";
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const requestOptions = {
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(API, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return <div>{list}</div>;
}

/*
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
      });
  }, []);

   {list.map((e) => (
        <p>{e.}</p>
      ))}
      
  */
