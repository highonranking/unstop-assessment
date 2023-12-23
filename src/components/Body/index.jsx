import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";
import Overview from "./Overview/index.js";
import Assessments from "./MainBody/index.js";
import { HEADER_TABS, SECTIONS, ASSESSMENTS_STATIC } from "../../constants/index.js";


const Main = ({ setShowMenu }) => {
  const [assessments, setAssessments] = useState([]);
  const [showOverview, setShowOverview] = useState(false);
  const activeTab = "My Assessments";

  // useEffects used to store and get the assessments from localStorage
  useEffect(() => {
    if (assessments.length > 0)
      localStorage.setItem("assessments", JSON.stringify(assessments));
    else localStorage.setItem("assessments", JSON.stringify(ASSESSMENTS_STATIC));
  }, [assessments]);

  useEffect(() => {
    setAssessments(JSON.parse(localStorage.getItem("assessments")));
  }, []);

  return (
    <div className="main">
      <div className="main-container">
        <header className="header">
          <div className="title">
            {/* Icon to show menu on mobile devices */}
            <div
              className="menu-icon"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <img src="/assets/menu/segment.svg" alt="" />
            </div>
            <h3 className="title-text">Assessment</h3>
          </div>
          <div className="tabs">
            {HEADER_TABS.map((tab) => (
              <div className={`tab ${tab === activeTab && "active"}`} key={tab}>
                {tab}
              </div>
            ))}
          </div>
        </header>
        <div className="content">
          <Overview sections={SECTIONS} show={showOverview} />
          <Assessments
            assessments={assessments}
            setAssessments={setAssessments}
            setShow={setShowOverview}
          />
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  setShowMenu: PropTypes.func,
};

export default Main;
