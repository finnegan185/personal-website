import React from "react";

function Biography(props) {
  return (
    <div className="d-flex flex-column">
      <div className="d-sm-flex flex-row">
        <div>
          <img className="rounded" src="\public\HEICtoJPGHeroSqsmall.jpg" alt="Picture of Zack" />
        </div>
        <div className="d-flex flex-column justify-content-between ms-2 greeting">
          <h1 className="">Hi, I'm Zack.</h1>

          <div>
            <h4 className="mb-1">Contact Me</h4>
            <div className="ms-1">
              <p className="mb-1">
                <a className="text-muted" href="mailto:zack.finnegan4@gmail.com" target="_blank">
                  zack.finnegan4@gmail.com
                </a>
              </p>

              <span className="mb-0 pe-1">
                <a href="https://github.com/finnegan185" target="_blank">
                  <i className="fa fa-github fa-2x pe-2 text-muted"></i>
                </a>

                <a href="https://www.linkedin.com/in/zackfinnegan/" target="_blank">
                  <i className="fa fa-linkedin-square fa-2x text-muted"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-muted pt-4 me-5">Lead Research Coordinator with a Computer Science and Psychology degree with over 6 years experience managing over 100 Oncology research protocols at an NCI-designated Comprehensive Cancer Center. Instrumental in process improvement(s) implementation, audit prep, billing quality assurance, supervising, and training teams of 2-6 on the Head & Neck, Gastrointestinal, Genitourinary, Breast, Thoracic and Phase 1 research teams. Looking to apply my skillsets in software engineering.</p>
      </div>
    </div>
  );
}

export default Biography;
