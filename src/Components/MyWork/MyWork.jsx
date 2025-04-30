import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork-data.js';
import { FaArrowRightLong } from 'react-icons/fa6';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="projects">
              <img key={index} src={work.w_image} alt="" />

              <div className="project-description">
                <h2>{}
                  {work.w_no}.{work.w_name}
                </h2>                
                <p>{work.w_dsc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRightLong size={24} />
      </div>
    </div>
  );
};

export default MyWork;
