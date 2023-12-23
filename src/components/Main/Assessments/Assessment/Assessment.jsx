import "./Assessment.css";
import PropTypes from "prop-types";

// Assessment component that displays assessment details
const Assessment = ({ assessment }) => {
  return (
    <div className="assessment">
      {/* Assessment icon */}
      <div className="assessment-icon">
        <img src="/assets/menu/briefcase.svg" alt={assessment.title} />
      </div>
      {/* Options icon */}
      <div className="options-icon">
        <img src="/assets/menu/3 dot.svg" alt="" />
      </div>
      {/* Main content of the assessment */}
      <div className="assessment-main">
        {/* Assessment title */}
        <h4>{assessment.title}</h4>
        <div className="info">
          {/* Purpose of the assessment */}
          <p className="purpose">{assessment.purpose}</p>
          <div className="date">
            {/* Calendar icon for the assessment date */}
            <img src="/assets/menu/calendar_today.svg" alt="date_icon" />
            {/* Display the assessment date */}
            <p>{assessment.date}</p>
          </div>
        </div>
        <div className="details">
          {/* Counts section displaying duration and number of questions */}
          <div className="counts">
            <div className="count">
              <p>{assessment.duration}</p>
              <p>Duration</p>
            </div>
            <div className="count">
              <p>{assessment.questions}</p>
              <p>Questions</p>
            </div>
          </div>
          {/* Share links section */}
          <div className="share-links">
            <a href="#" className="link">
              {/* Link icon for sharing */}
              <img src="/assets/menu/link.svg" alt="share_icon" />
              {/* Text indicating sharing */}
              <p>Share</p>
            </a>
            <div className="participants">
              {/* Display participant icons (up to three) */}
              {assessment.participants.slice(0, 3).map((participant, index) => (
                <div className="participant" key={index}>
                  {/* Display participant photo or default profile if not available */}
                  {participant.photo ? (
                    <img src={participant.photo} alt="" />
                  ) : (
                    <p className="profile">LP</p>
                  )}
                </div>
              ))}
              {/* Display count of additional participants if more than three */}
              {assessment.participants.length > 3 && (
                <p className="extra-count">
                  +{assessment.participants.length - 3}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop type validation for the 'assessment' prop
Assessment.propTypes = {
  assessment: PropTypes.object,
};

// Export the Assessment component
export default Assessment;
