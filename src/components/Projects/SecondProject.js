import arcadeLiteImg from './images/Arcade-Lite-img.png';

const SecondProject = () => (
  <div
    className="box project-box"
    style={{ margin: '2rem', padding: '1.25rem' }}
  >
    <div className="box">
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img
              className="project-pic"
              src={arcadeLiteImg}
              alt="Tetris!"
              href="https://arcade-lite.herokuapp.com/"
            />
          </figure>
        </div>
        <div className="column">
          <p>
            <strong>Arcade-Lite</strong>{' '}
            <small>
              <a
                className="project-link-tag"
                href="https://github.com/Windowmac/arcade-lite"
              >
                github
              </a>
            </small>{' '}
            <small>
              <a
                className="project-link-tag"
                href="https://arcade-lite.herokuapp.com/"
              >
                deployed
              </a>
            </small>
            <br />A team-built application. A React app designed to play Tetris! Uses Context API to change state and set timers/ check piece movement. Top scores stored in MongoDB via Apollo Client
          </p>
          <p>
            <strong>Stack: </strong>
            GraphQL, React, Apollo Server/Client, Mongoose, Context API
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SecondProject;
