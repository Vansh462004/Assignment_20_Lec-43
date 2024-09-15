import React, { ButtonHTMLAttributes, FC } from "react";
import '../index.css';

type buttonProps = {
  theme?:"primary" | "secondary" ;
  name:string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button:FC<buttonProps> = ({ theme,name,className,...rest }) => {

  let themeClass = "bg-blue-700 text-white"; 
  if (theme === "secondary") {
    themeClass = "bg-white text-blue-700";
  } 

  return (
    <button 
      {...rest}
      className={"border rounded-md px-6 text-2xl text-white py-1 mx-2 "+ themeClass}
    >
        {name}
    </button>
  );
}

Button.defaultProps={
    theme:"primary",
    name:"primary",
}

export default Button;
