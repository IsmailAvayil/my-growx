import React from "react";

interface ButtonProps {
  text: string;

  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,

  onClick,
}) => {
  return (
    <button
      className="flex items-center  rounded-[30px] bg-[#000000] px-7 py-3 cursor-pointer hover:bg-[#FE4A0F]"
      onClick={onClick}
    >
      <p className="text-[#FFFFFF]">{text}</p>
    </button>
  );
};

export default Button;
