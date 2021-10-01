import './Headshot.css';

const Headshot = () => (
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure>
          <img
            id="headshot"
            src="/images/Headshot-cropped.jpg"
            alt="Headshot"
          ></img>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
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
