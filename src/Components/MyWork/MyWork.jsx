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
                <h2>
                  {}
                 <span> {work.w_no}</span>.<span className='w-desc-name'>{work.w_name}</span>
                </h2>
                <p>{work.w_dsc}</p>
                <div>
                  <a href={work.w_url}>Veiw Project Details</a>
                </div>
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
