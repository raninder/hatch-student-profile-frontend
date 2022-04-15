import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './Search';


export default function Fetch() {
	const [data, setData] = useState([]);
  
  const url = "https://api.hatchways.io/assessment/students";
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setData(response.data.students);
    })
    .catch(error => {
      console.log('Error: ' + error);
      })
  }, []);

	return(
		<>
      <section>
          <Search data={data}/>
      </section>
		</>
	)
}