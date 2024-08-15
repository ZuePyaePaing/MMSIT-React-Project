import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`${className} p-5 font-popin`}>{children}</section>
  );
};

export default Container;
