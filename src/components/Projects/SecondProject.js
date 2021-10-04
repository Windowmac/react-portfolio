import klettersteigPic from './images/KlettersteigLogIn.PNG';

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
              src={klettersteigPic}
              alt="Klettersteig login page"
            />
          </figure>
        </div>
        <div className="column">
          <p>
            <strong>Klettersteig</strong>{' '}
            <small>
              <a
                className="project-link-tag"
                href="https://github.com/Windowmac/Klettersteig"
              >
                github
              </a>
            </small>{' '}
            <small>
              <a
                className="project-link-tag"
                href="https://sheltered-badlands-95600.herokuapp.com/"
              >
                deployed
              </a>
            </small>
            <br />A hiking app designed to deliver hikes near the user as well
            as allow them to save favorites/pictures to the app
          </p>
          <p>
            <strong>Stack: </strong>
            SQL, Express, Node, HTML/CSS, Firebase, Sequelize, Handlebars
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SecondProject;
