import React from "react";
import Page from "./Page";
import Card from "./Card";

function Home(props) {
  return (
    <Page title="Home">
      <div className="row">
        <div>
          <img className="rounded mx-auto d-block" src="\public\HEICtoJPGHeroSqsmall.jpg" alt="Picture of Zack" />
        </div>
        <h1 className="text-center pt-3">Hi, I'm Zack.</h1>
        <p className="text-muted">Lead Research Coordinator with a Computer Science and Psychology degree with over 6 years experience managing over 100 Oncology research protocols at an NCI-designated Comprehensive Cancer Center. Instrumental in process improvement(s) implementation, audit prep, billing quality assurance, supervising, and training teams of 2-6 on the Head & Neck, Gastrointestinal, Genitourinary, Breast, Thoracic and Phase 1 research teams. Looking to apply my skillsets in software engineering.</p>
        <h3 className="text-center">My Portfolio</h3>
        <div className="container">
          <div className="row pt-3">
            <div className="col">
              <Card src="\public\ZackUniversityCard.jpg" alt="ZackUniversity" />
            </div>
            <div className="col">
              <Card src="\public\ZackUniversityCard.jpg" alt="ZackUniversity" />
            </div>
          </div>
          <div className="row pt-4">
            <div className="col">
              <Card src="\public\ZackUniversityCard.jpg" alt="ZackUniversity" />
            </div>
            <div className="col">
              <Card src="\public\ZackUniversityCard.jpg" alt="ZackUniversity" />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;