import React from "react";

function Skill(props) {
  console.log(props.relatedTo);
  return (
    <div className={`Skill ${props.relatedTo}`}>
      <a href={props.link} target="_blank">
        <img
          className={`skill-img`} 
          src={props.imgLink}
          alt={props.name}
          height="80"
        />
      </a>
    </div>
  );
}

export default Skill;