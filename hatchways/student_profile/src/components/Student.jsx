import React, { useState} from "react";
import Test from './Test';
import Tag from './Tag';


export default function Student(props) {
	const [check,setCheck] = useState(false);
	const [plus, setPlus] = useState(true);
	const [tag,setTag] = useState([]);
  const [input, setInput] = useState(""); 


  const { id,pic,firstName, lastName, email,company, skill, grades} = props;
	let sum=0;
	for(let i=0;i<grades.length;i++){
		sum+=Number(grades[i]);
	}

	const average = sum / grades.length;

	const obj = {id, firstName, lastName,email,company,skill,grades};

	function expand(){
		setCheck(true);	
		setPlus(false);
	}
	function collapse(){
		setCheck(false);
		setPlus(true);
	}
	const saveInput = (e) => {
    setInput(e.target.value);
  };
	
	function addTag(e){
		e.preventDefault();
	  const tags = [...tag];
    tags.push(input);
    setTag(tags);
		setInput("");
	}    

	//adding tags data to props object 
	const final = Object.assign(obj,tag);

	localStorage.setItem("finalData", JSON.stringify(final));

  return (
		<>
	
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
						Average: {average}% <br/>
						<p/>

						{check && 
							grades.map((grade,index)=> (
							<Test key={id} grade={grade} id={index+1}/>
							))
						}

						{tag &&
							tag.map((t,index) =>
							<Tag key={index} tag = {t} />)
						}
						<br/> 
					
						<form onSubmit={addTag}>
							<input type="text" className="tag"
							value={input}
							onChange={(e)=>saveInput(e)}
							placeholder="add tag"
							/>
						</form>
					</div>
				</div>
		</section>
		</>
	);
}

