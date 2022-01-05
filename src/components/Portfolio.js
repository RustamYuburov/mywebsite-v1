import React, { useEffect, useState } from 'react';
import Data from '../utilities/Data';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setProjects(Data);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="main ">
      <h1 className="mainInfo">
        Here's the list of examples of projects that I've created. <br />
        You can find source code of these projects and others on my{' '}
        <a href="https://github.com/RustamYuburov" target="_blank" rel="noreferrer">
          Github
        </a>
        .
      </h1>

      <div className="portfolio">
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          projects.map((project, index) => {
            return (
              <div key={index + 20} className="project">
                <div className="projectImg">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="projectInfo">
                  <div className="projectDetail">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="projectDetail">
                    <img
                      className="portfolioDetailIcon"
                      src="https://img.icons8.com/ios/50/000000/info--v1.png"
                      alt="icons"
                    />
                    <p>{project.summary}</p>
                  </div>
                  <div className="projectDetail">
                    <img
                      className="portfolioDetailIcon"
                      src="https://img.icons8.com/ios/50/000000/services--v1.png"
                      alt="icons"
                    />
                    <span>{project.stack}</span>
                  </div>

                  <div className="btns">
                    <div className="btn">
                      <a href={project.source} target="_blank" rel="noreferrer">
                        <img
                          src="https://img.icons8.com/ios/50/000000/open-source.png"
                          alt="icons"
                        />
                        <span>Check Code!</span>
                      </a>
                    </div>
                    <div className="btn">
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <img
                          src="https://img.icons8.com/ios/50/000000/youtube-live.png"
                          alt="icons"
                        />
                        <span>Live Demo!</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Portfolio;
