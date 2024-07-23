import React from "react";

const CategorieBtn = ({ title }) => {
  return (
    <button className=" text-nowrap text-sm shadow-md text-white transition-all duration-150  rounded-md py-2 px-4 capitalize bg-teal-600 hover:bg-teal-400 active:scale-90 ">
      {title}
    </button>
  );
};

export default CategorieBtn;
