import React from "react";
import Project from "./projectsElements";
import iPhone from "./../assets/iPhone12_blue_frame.PNG";

// Components
import { RoundBlueButton, RoundGreenButton } from "../componets/buttons";

const Projects = () => {
  console.log("projects");
  return (
    <div
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: window.innerHeight * 0.92,
      }}
    >
      <Project
        color="#181818"
        title="cardstepper"
        shortDesc="the portal to achieve goals"
        desc="The name Cardstepper is derived from Card and Step. With the help
        of cards on a path, the person seeking help can work through a
        process step by step and safely reach the set goal. The user
        always sees only the card of the current step on the path of a
        process. He can go to the next step by swiping, but he can also go
        back to the previous step."
        blueBtnContent="Read more"
        blueBtnLink="https://github.com/petersell/cardstepper/blob/main/documentation/cardstepper.adoc"
        greenBtnContent="Website"
        greenBtnLink="https://cardstepper.com"
        content={
          <img
            src={iPhone}
            style={{
              width: "10%",
              height: "auto",
              display: "block",
              float: "right",
              marginTop: "20vh",
              marginRight: "30vh",
            }}
          />
        }
      />
      <Project
        color="#1B1B1B"
        title="petersell.dev"
        shortDesc="portfolio website of Johann Petersll"
        desc="petersell.dev is a website of Johann Petersell and is used as a
        portfolio. All projects I program are listed here. Before this
        website programmed with reactjs, there was a website programmed
        with vanilla HTML or CSS."
        blueBtnContent="Old site"
        blueBtnLink="https://old.petersell.dev"
        greenBtnContent="Github Repository"
        greenBtnLink="https://github.com/JohannLULW/beta.petersell.dev/"
      />
      <Project
        color="#181818"
        title="Small Projects"
        shortDesc="small projects on github"
        desc="To see my small side projects visit my GutHub repository page."
        blueBtnContent="Old site"
        blueBtnLink="https://old.petersell.dev"
        greenBtnContent="All Projects"
        greenBtnLink="https://github.com/JohannLULW?tab=repositories"
      />
    </div>
  );
};

export default Projects;
