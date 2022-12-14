import React from "react";
import KeyboardRow1 from "./contact-components/KeyboardRow1";
import KeyboardRow2 from "./contact-components/KeyboardRow2";
import KeyboardRow3 from "./contact-components/KeyboardRow3";
import KeyboardRow4 from "./contact-components/KeyboardRow4";
import KeyboardRow5 from "./contact-components/KeyboardRow5";
import Monitor from "./contact-components/Monitor";
import Mouse from "./contact-components/Mouse";

const Contact = () => {
  return (
    <section className="section-contact u-margin-bottom-section">
      <h3 className="projects__heading-primary">Contact Me</h3>
      <div className="contact__computer">
        <Monitor />
        <div className="u-row contact__row--keyboard-mouse">
          <div className="contact__computer--keyboard">
            <KeyboardRow1 />
            <KeyboardRow2 />
            <KeyboardRow3 />
            <KeyboardRow4 />
            <KeyboardRow5 />
          </div>
          <Mouse />
        </div>
      </div>
    </section>
  );
};

export default Contact;
