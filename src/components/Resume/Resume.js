import './Resume.css';
import resumeImg from './resume-img.png';
import resumePdf from './Full-Stack-Resume-10-21.pdf'


const Resume = (props) => (
  <div className="box" style={{ background: 'black' }}>
    <div className="columns">
      <div
        className="column"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <figure>
          <a
            href={resumePdf}
            download
          >
            <img id="resume-pic" src={resumeImg} alt="resume!" />
          </a>
        </figure>
      </div>
    </div>
  </div>
);

export default Resume;
