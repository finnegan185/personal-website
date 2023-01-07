import React from "react";
import Card from "./Card";

function Portfolio(props) {
  return (
    <div className="container-lg portfolio-container">
      <h3 className="text-center">My Portfolio</h3>
      <div className="d-flex flex-wrap justify-content-evenly">
        <Card src="\public\ZackUniversityCardSm.JPG" alt="ZackUniversity" title="Oncology Research Web App" link="https://zfinnegan.com/" />

        <Card src="\public\SocialMediaAppReactSm.JPG" alt="React Course" title="React Course Web App" link="https://reactcourse.zfinnegan.com/" />

        <Card src="\public\SocialMediaAppNoReactSm.JPG" alt="No React Course" title="JavaScript Course Web App" link="https://noreactcourse.zfinnegan.com/" />

        <Card src="\public\travelSiteCourseSm.JPG" alt="Travel Site Course" title="Web Developer Course Web App" link="https://finnegan185.github.io/travel-site/" />
      </div>
    </div>
  );
}

export default Portfolio;
