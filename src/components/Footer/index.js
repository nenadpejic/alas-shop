import React from "react";
import './style.scss';

const Footer = () => {
  const year = { date: new Date() };

  return (
    <footer className="footer">
      <div className="wrapper">
        <p>Copyright &copy; <span className="year">{year.date.getFullYear()}</span> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
