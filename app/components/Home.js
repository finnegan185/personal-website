import React from "react";
import Page from "./Page";
import Portfolio from "./Portfolio";
import Biography from "./Biography";

function Home(props) {
  return (
    <Page title="Home">
      <div className="row py-5">
        <div className="col-lg bio-col">
          <Biography />
        </div>
        <div className="col-lg">
          <Portfolio />
        </div>
      </div>
    </Page>
  );
}

export default Home;
