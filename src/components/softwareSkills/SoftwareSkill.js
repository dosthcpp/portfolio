import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {ReactComponent as Flutter} from "../../assets/images/flutter.svg";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return skills?.willUseSVG ? (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <Flutter width={40} height={40} />
                <p>{skills.skillName}</p>
              </li>
            ) : (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
