import { Link } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import dummyPic from "../assets/pg2.png";

export default function ScrollShowbarComponent(props) {
  const scroll = (val) => {
    document.getElementsByClassName("recentUploadsContainer")[0].scrollLeft +=
      val;
  };
  const renderCards = () => {
    return props.recentUploads.map((project, index) => {
      return (
        <div className="projectCard" key={index}>
          <Link to="/project" state={{ index: project.index }}>
            <div className="cardImg">
              <img
                src={project.cid ? "https://" + project.cid : dummyPic}
                alt="test-pic"
                width="300"
                height="170"
              />
            </div>
          </Link>
          <div className="cardDetail">
            <div className="cardTitle">
              <Link to="/project" state={{ index: project.index }}>
                {project.projectName}
              </Link>
            </div>
            <div className="cardDesc">{project.projectDescription}</div>
            <div className="cardAuthor">{"By " + project.creatorName}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="recentUploads">
      <div className="recentUploadsHeader">
        <div className="recentUploadsHeading">{props.heading}</div>
        {props.recentUploads.length ? (
          <div className="scrollButtons">
            <BsArrowLeftCircle
              className="scrollNavBtn"
              onClick={() => scroll(-300)}
            />
            <BsArrowRightCircle
              className="scrollNavBtn"
              onClick={() => scroll(300)}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="recentUploadsContainer">
        {props.recentUploads.length ? (
          renderCards()
        ) : (
          <div className="noProjects">{props.emptyMessage}</div>
        )}
      </div>
    </div>
  );
}
