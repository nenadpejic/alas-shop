import React from "react";

const Footer = () => {
  const year = { date: new Date() };

  return (
    <footer className="footer">
      <div className="wrapper">
        <p>Copyright &copy; {year.date.getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
