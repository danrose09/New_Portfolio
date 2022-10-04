import React from "react";

const Projects = () => {
  return (
    <section className="section-projects u-margin-bottom-section u-padding-x-section">
      <div className="projects-hangman">
        <h2 className="projects-hangman__heading-primary ">
          1.Hangman Dictionary
        </h2>

        <h3 className="projects-hangman__skills u-margin-bottom-medium">
          <p>MERN STACK</p>
        </h3>

        <div className="row">
          <div className="projects-hangman__drawing-box">
            {/* <pre>'''
  +---+ \\
  |   |
  O   |
 /|\  |
 / \  |
      |
========='''</pre> */}
            <div className="projects-hangman__drawing">
              <i class="fa-solid fa-robot fa-7x"></i>
            </div>
            <p className="projects-hangman__drawing-text">h a n g _ a n</p>
          </div>
          <p className="projects-hangman__description">
            I'm baby pop-up kale chips farm-to-table DIY la croix plaid lo-fi
            cold-pressed. Gatekeep gastropub pitchfork sriracha chia mukbang
            cred lomo brunch iceland. Raclette twee hell of af, lo-fi small
            batch vape you probably haven't heard of them chartreuse. Beard
            sriracha single-origin coffee bespoke pabst venmo organic taxidermy
            poutine irony scenester truffaut.
          </p>
          <p className="projects-hangman__description">
            Thundercats neutra vice readymade plaid raw denim aesthetic raclette
            echo park shoreditch. Gastropub actually sustainable chartreuse DSA,
            chicharrones kitsch next level ugh. Irony scenester intelligentsia
            kogi sriracha praxis tote bag sustainable fingerstache kickstarter.
            JOMO gastropub same cornhole pour-over tote bag YOLO gentrify. Ramps
            la croix four loko viral asymmetrical bitters vape woke 3 wolf moon
            cliche. Everyday carry selvage keffiyeh green juice bitters af
            freegan tonx VHS shaman etsy man braid food truck.
          </p>
          <p className="projects-hangman__description">
            Man braid meggings cornhole woke, kale chips yuccie leggings
            portland mumblecore drinking vinegar coloring book truffaut. Ramps
            forage salvia selfies, mukbang enamel pin tonx helvetica chartreuse
            mlkshk slow-carb. Quinoa letterpress taxidermy bodega boys
            church-key tote bag cred actually shabby chic fam. Lo-fi cliche la
            croix truffaut 90's.
          </p>
        </div>
        {/* <div className="row">Some text</div> */}
      </div>
    </section>
  );
};

export default Projects;
