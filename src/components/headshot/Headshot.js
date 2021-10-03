import './Headshot.css';
import headshotPic from './Headshot-cropped.jpg'

const Headshot = () => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure>
          <img
            id="headshot"
            src={headshotPic}
            alt="Headshot"
          ></img>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <h1>McKendree "Mac" Strommer</h1>
          <p>
            A Web Developer, proficient in MERN FullStack - Ready to learn,
            build, and code! (Not necessarily in that order).
          </p>
          <p>Come see what I've made.</p>
        </div>
      </div>
    </article>
  </div>
);

export default Headshot;
