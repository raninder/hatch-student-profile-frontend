import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from './Student';
import Search from './Search';
// import { useHistory } from 'react-router-dom';

export default function Fetch() {
	const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // const history = useHistory();
  const url = "https://api.hatchways.io/assessment/students";
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log("data1",response.data.students);
      setData(response.data.students);
      // setFilteredData(response.data);
    })
    .catch(error => {
      console.log('Error: ' + error);
      })
  }, []);
	console.log("data2",data);


  // function handleSearch(event){
  //   let value = event.target.value;
  //   let result = [];

    // for(let item of data){
    //   if(item.firstName.toLowerCase().includes(value)){
    //   result.push(item);
    //   }
    // }
    
    // history.push('/Search', { result});
    // let value = event.target.value;
    // for(let item of data){
    //   if(value === '')
    //   setData(item);
    //   else if(item.firstName.toLowerCase().includes(value))
    //     setData(item);
    //     else
    //     setData('');
    // }
  //  filteredData = data.filter((el) => {
	
  //     if (value === '') {
  //         return el;
  //     }
  
  //     else {
  //       return el.firstName.toLowerCase().includes(value);
      
  //     }
  // })


	
	return(
		<>
     
      <section className='products'>
        <span id='search'>
          <Search data={data}/>
        </span>
        {/* <h1> Fragrances</h1> */}
        {/* <div className='new-arrival-products'>
          <ProductsList products={products} /> 
        </div> */}
      </section>
  
		{/* <input type="text"
          onChange={(event) => handleSearch(event)}
          label="Search"
          placeholder="search"
        /> */}
		{/* {data.map((item) => (
        <Student key={item.id} {...item} />
      ))} */}
		</>
	)
}