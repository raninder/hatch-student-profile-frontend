import { React, useState } from "react";
import List from "./List";

export default function Search({data}) {
  
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");

  let retrievedObject = JSON.parse(localStorage.getItem('finalData'));

  let inputHandler1 = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText1(lowerCase);
  };
  let inputHandler2 = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText2(lowerCase);
  };
  
  return (
    <div>
        <input type="text" className="search"
          onChange={inputHandler1}
          placeholder="Search by name"
        />
        <input type="text" className="search"
          onChange={inputHandler2}
          placeholder="Search by tag"
        />
		
      <List input1={inputText1} input2={inputText2} data1={data} data2={retrievedObject}/>
    </div>
  );
}