import PropTypes from "prop-types";
import "./Overview.css";

// Overview component to display statistics sections based on the 'sections' array from Main component
const Overview = ({ sections, show }) => {
  return (
    // Conditional rendering based on 'show' prop
    <section className={`overview ${show && "show"}`}>
      <h3>Assessments Overview</h3>
      <div className="overview-container">
        {/* Mapping over each section in the 'sections' array */}
        {sections.map((overview) => (
          <div className="section" key={overview.title}>
            {/* Title of the section */}
            <h4 className="title">{overview.title}</h4>
            <div className="stats">
              {/* Icon representing the section */}
              <img
                src={`/assets/menu/${overview.imgSrc}`}
                alt={overview.title}
                // Applying additional classes based on 'imgClass' from the section data
                className={`icon ${overview.imgClass && overview.imgClass}`}
              />
              {/* Mapping over stats within the section */}
              {overview.stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <div className="stat-number">
                    {/* Displaying the statistic number */}
                    <p className="number">{stat.number}</p>
                    {/* Displaying change if available */}
                    <p className="change">{stat.change && stat.change}</p>
                  </div>
                  {/* Displaying the title of the statistic */}
                  <p className="stat-title">{stat.title && stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Prop type validation for 'sections' (array) and 'show' (boolean) props
Overview.propTypes = {
  sections: PropTypes.array,
  show: PropTypes.bool,
};

export default Overview;
