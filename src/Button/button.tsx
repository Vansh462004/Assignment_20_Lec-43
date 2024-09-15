import React, { ButtonHTMLAttributes, FC } from "react";


type buttonProps = {
  theme?:"primary" | "secondary" ;
  size:"small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button:FC<buttonProps> = ({ theme,className,...rest }) => {

  let themeClass = "bg-blue-700 text-white"; 
  if (theme === "secondary") {
    themeClass = "bg-white text-blue-700";
  } 

  return (
    <button 
      {...rest}
      className={"border rounded-md px-6 text-2xl text-white py-1 mx-2 "+ themeClass}
    >
    </button>
  );
}

Button.defaultProps={
    theme:"primary",
}

export default Button;
