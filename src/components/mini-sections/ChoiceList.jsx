import React from "react";
import "./ChoiceList.sass";

const ChoiceList = ({ choices, onClick }) => 
  (
    <ul className="tags is-centered as-choices">
      {choices.map(choice => (
        <li
        key={choice.id}
          className={`tag is-medium as-choice ${
            choice.selected ? "active has-text-black-ter" : "has-text-grey"
          }`}
          onClick={() => onClick(choice.id)}
        >
          {choice.label}
        </li>
      ))}
    </ul>
  );


export default ChoiceList;
