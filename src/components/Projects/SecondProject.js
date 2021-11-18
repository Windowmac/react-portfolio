import techBlogImg from './images/tech-blog-image.png';

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
              src={techBlogImg}
              alt="tech-blog post pic"
              href="https://agile-fjord-86580.herokuapp.com/"
            />
          </figure>
        </div>
        <div className="column">
          <p>
            <strong>Tech Blog</strong>{' '}
            <small>
              <a
                className="project-link-tag"
                href="https://github.com/Windowmac/tech-blog"
              >
                github
              </a>
            </small>{' '}
            <small>
              <a
                className="project-link-tag"
                href="https://agile-fjord-86580.herokuapp.com/"
              >
                deployed
              </a>
            </small>
            <br />A solo-built application. Handleblars viewengine, Express / Sequelize backend. A blog app that allows the user to create an account, post, and comment on posts. Keeps track of user through cookies to allow easy return. Hashes the passwords for security. Functionally sound, sparsely designed.
          </p>
          <p>
            <strong>Stack: </strong>
            SQL, Sequelize, Heroku, Javascript, HTML/CSS, Handlebars, Express, Cookies, MVC layout, bcrypt
            REST APIs, Bulma
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SecondProject;
