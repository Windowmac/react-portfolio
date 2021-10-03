const SecondProject = () => (
  <div
    className="box project-box"
    style={{ margin: '2rem', padding: '1.25rem' }}
  >
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image" style={{ width: '250px', height: '150px' }}>
            <img
              style={{ width: '250px', height: '150px' }}
              className="project-pic"
              src="/images/KlettersteigLogIn.png"
              alt="Klettersteig login page"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
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
      </article>
    </div>
  </div>
);

export default SecondProject;
