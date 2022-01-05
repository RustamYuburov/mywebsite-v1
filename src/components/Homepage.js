import React from 'react';
import {
  Backend,
  Frontend,
  Miscellaneous,
  Nodejs,
  Expressjs,
  EJS,
  Mongoose,
  Mongodb,
  HTML,
  CSS,
  StyledComponents,
  Javascript,
  ReactImg,
  Git,
  Github,
  Heroku,
  Webpack,
  NPM,
  Russian,
  English,
  Chinese,
} from '../assets';

const Homepage = () => {
  return (
    <div className="main ">
      <h1 className="mainInfo">
        Hello! My name is Rustam Yuburov. And I'm Javascript & Node.js developer. <br />I build
        websites. Like this one or <a href="/portfolio">others</a>, for example.
      </h1>

      <div className="stackInfo">
        <img className="stackImg" src={Backend} alt="backend img"></img>
        <div className="stackDetails">
          <h2>My back-end tech stack.</h2>
          <div className="stackGrid">
            <div className="stackDetailInfo">
              <h3>Node.js</h3>
              <img className="stackDetailImg" src={Nodejs} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Express.js</h3>
              <img className="stackDetailImg" src={Expressjs} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>MongoDB</h3>
              <img className="stackDetailImg" src={Mongodb} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Mongoose</h3>
              <img className="stackDetailImg" src={Mongoose} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>EJS</h3>
              <img className="stackDetailImg" src={EJS} alt="stack logos"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="stackInfo">
        <img className="stackImg" src={Frontend} alt="frontend img"></img>
        <div className="stackDetails">
          <h2>... and front-end tech stack.</h2>
          <div className="stackGrid">
            <div className="stackDetailInfo">
              <h3>HTML</h3>
              <img className="stackDetailImg" src={HTML} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>CSS</h3>
              <img className="stackDetailImg" src={CSS} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Javascript</h3>
              <img className="stackDetailImg" src={Javascript} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>React</h3>
              <img className="stackDetailImg" src={ReactImg} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Styled Components</h3>
              <img className="stackDetailImg" src={StyledComponents} alt="stack logos"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="stackInfo">
        <img className="stackImg" src={Miscellaneous} alt="miscellaneous img"></img>
        <div className="stackDetails">
          <h2>... also some miscellaneous.</h2>
          <div className="stackGrid">
            <div className="stackDetailInfo">
              <h3>Git</h3>
              <img className="stackDetailImg" src={Git} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Github</h3>
              <img className="stackDetailImg" src={Github} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Heroku</h3>
              <img className="stackDetailImg" src={Heroku} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>Webpack</h3>
              <img className="stackDetailImg" src={Webpack} alt="stack logos"></img>
            </div>
            <div className="stackDetailInfo">
              <h3>NPM</h3>
              <img className="stackDetailImg" src={NPM} alt="stack logos"></img>
            </div>
          </div>
        </div>
      </div>

      <h3 className="langs">
        I also fluently speak English
        <img className="stackDetailImg flags" src={English} alt=" flags"></img>, Russian
        <img className="stackDetailImg flags" src={Russian} alt=" flags"></img>
        and Chinese
        <img className="stackDetailImg flags" src={Chinese} alt=" flags"></img>
      </h3>
    </div>
  );
};

export default Homepage;
