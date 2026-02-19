import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/popup.scss";

const RedirectPopup = ({ page }) => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <div className="popup">
      <div className={`${page === 'login' ? 'loginLoader' : 'registerLoader'}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <p>Redirecting you to the home page within <strong className={page === 'login' ? 'loginTimer' : 'registerTimer'}>{seconds}</strong> seconds</p>
    </div>
  );
};

export default RedirectPopup;
