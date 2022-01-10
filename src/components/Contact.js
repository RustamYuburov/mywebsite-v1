import React from 'react';

const Contact = () => {
  return (
    <div className="main ">
      <h1 className="mainInfo">
        Have a question or want to work together? <br />
        Feel free to contact me through any of the methods listed below. <br />
        I'll try to answer you as soon as possible :)
      </h1>

      <div className="contacts">
        <div className="contactInfo">
          <a href="mailto:rustamyuburov.work@gmail.com">
            <img
              className="contactImg"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg"
              alt="contact logo"
            />
            <h3>rustamyuburov.work@gmail.com</h3>
          </a>
        </div>
        <div className="contactInfo">
          <a href="https://github.com/RustamYuburov">
            <img
              className="contactImg"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
              alt="contact logo"
            />
            <h3>Github</h3>
          </a>
        </div>
        <div className="contactInfo">
          <a href="https://www.linkedin.com/in/rustam-yuburov/">
            <img
              className="contactImg"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
              alt="contact logo"
            />
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
