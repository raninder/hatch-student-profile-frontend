import React, { useState,useEffect } from "react";
import axios from "axios";

const Test = ({ id,grade }) => {
  return (
    <div>
      Test{id} <span>{grade}% </span> 
    </div>
  );
};

export default function Student(props) {
	const [check,setCheck] = useState(false);
	const [plus, setPlus] = useState(true);
  const { id,pic,firstName, lastName, email,company, skill, grades} = props;
	let sum=0;
	for(let i=0;i<grades.length;i++){
	console.log("grades-i",grades[i]);
	sum+=Number(grades[i]);
	}

	const average = sum / grades.length;

	function expand(){
			setCheck(true);
			setPlus(false);
	}
	function collapse(){
		setCheck(false);
		setPlus(true);
}
	
  return (
    
		 <section className="container">
			 <div className="left">
        <div className="image-cropper">

            <img src={pic} className="profile-pic" />

        </div>
			</div>
        <div className="details">
      
					<h3 className="name">{firstName} {lastName}
					{plus? 
					(<span id="plus-icon" onClick={expand}> &#43;</span>)
					:
					<span id="plus-icon" onClick={collapse}> &#8722;</span>
					}
					</h3>
					<div className= "info">
					Email: {email} <br/>
					Company: {company} <br/>
					Skill: {skill} <br/>
					Average: {average}% <p/><p/>
					{check && 
					grades.map((grade,index)=> (
						<Test key={id} grade={grade} id={index}/>
					))
					
					}
					</div>
				</div>	
					{/* <button className="btn btn-primary"onClick={() => add_to_request(id) }>Request</button>  */}
			
	</section>

  );
}

