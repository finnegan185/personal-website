import React from "react";
import Card from "./Card";

function Portfolio(props) {
  return (
    <div className="container-lg portfolio-container">
      <h3 className="text-center">My Portfolio</h3>
      <div className="d-flex flex-wrap justify-content-evenly">
        <Card src="\public\ZackUniversityCard.jpg" alt="ZackUniversity" title="Oncology Research Web App" link="https://zfinnegan.com/" />

        <Card src="\public\SocialMediaAppReact.JPG" alt="React Course" title="React Course Web App" link="https://reactcourse.zfinnegan.com/" />

        <Card src="\public\SocialMediaAppNoReact.JPG" alt="No React Course" title="JavaScript Course Web App" link="https://noreactcourse.zfinnegan.com/" />

        <Card src="\public\travelSiteCourse.JPG" alt="Travel Site Course" title="Web Developer Course Web App" link="https://finnegan185.github.io/travel-site/" />
      </div>
    </div>
  );
}

export default Portfolio;
