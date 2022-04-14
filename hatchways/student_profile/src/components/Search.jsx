import { React, useState } from "react";
import List from "./List";

export default function Search({data}) {
  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className='about'>
        <input type="text"
          onChange={inputHandler}
          placeholder="Search by name"
        />
		
      <List input={inputText} data={data}/>
    </div>
  );
}