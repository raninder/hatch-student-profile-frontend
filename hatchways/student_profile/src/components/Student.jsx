import React, { useState,useEffect } from "react";
import axios from "axios";

export default function Student(props) {
  const { id,pic,firstName, lastName, email,company, skill, grades} = props;
	let sum=0;
	for(let i=0;i<grades.length;i++){
	console.log("grades-i",grades[i]);
	sum+=Number(grades[i]);
	}

	const average = sum / grades.length;
	
  return (
    
		 <section className="container">
			 <div className="left">
        <div className="image-cropper">

            <img src={pic} className="profile-pic" />

        </div>
			</div>
        <div className="details">
      
					<h3 className="name">{firstName} {lastName}</h3>
					<div className= "info">
					Email: {email} <br/>
					Company: {company} <br/>
					Skill: {skill} <br/>
					Average: {average}%
					</div>
				</div>	
					{/* <button className="btn btn-primary"onClick={() => add_to_request(id) }>Request</button>  */}
			
	</section>

  );
}
