import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" mx-5 bg-teal-600 py-2 text-center text-white mt-auto">
      @ {date.getFullYear()} <a href="https://mms-it.com" className=" underline text-teal-200">MMS IT.</a> All rights reserved.
    </footer>
  );
};

export default Footer;
