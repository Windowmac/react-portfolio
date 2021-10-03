import './Resume.css';

const Resume = (props) => (
  <div className="box" style={{ background: 'black' }}>
    <div className="columns">
      <div
        className="column"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <figure>
          <a
            href="/Full-Stack-Resume.pdf"
            download
          >
            <img id="resume-pic" src="/images/resume-img.png" alt="resume!" />
          </a>
        </figure>
      </div>
    </div>
  </div>
);

export default Resume;
