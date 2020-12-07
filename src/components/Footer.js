import React from "react";

const Footer = () => {
  const year = { date: new Date() };

  return (
    <div className="footer">
      <p className="footer-para">Copyright &copy; {year.date.getFullYear()} </p>
    </div>
  );
};

export default Footer;
