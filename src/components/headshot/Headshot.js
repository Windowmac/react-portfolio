import './Headshot.css';
import headshotPic from './Headshot-cropped.jpg';

const Headshot = () => (
  <div className="box">
    <div className="columns">
      <div className="column" style={{display: "flex", justifyContent: "center"}}>
        <figure className="image">
          <img id="headshot" src={headshotPic} alt="Headshot"></img>
        </figure>
      </div>
      <div className="column">
        <div className="content">
          <h1>McKendree "Mac" Strommer</h1>
          <p>
            A Web Developer, proficient in MERN FullStack - Ready to learn,
            build, and code! (Not necessarily in that order).
          </p>
          <p>Come see what I've made.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Headshot;
