import doggoPic from './images/Doggo-finder-page1.png';

const ThirdProject = () => (
    <div
      className="box project-box"
      style={{ margin: '2rem', padding: '1.25rem' }}
    >
      <div className="box">
        <div className="columns">
          <div className="column">
            <figure
              className="image"
            >
              <img
                className="project-pic"
                src={doggoPic}
                alt="Doggo Finder first page"
              />
            </figure>
          </div>
          <div className="column">

              <p>
                <strong>Doggo Finder</strong>{' '}
                <small>
                  <a
                    className="project-link-tag"
                    href="https://github.com/Windowmac/Pet_Locator"
                  >
                    github
                  </a>
                </small>{' '}
                <small>
                  <a
                    className="project-link-tag"
                    href="https://windowmac.github.io/Pet_Locator/"
                  >
                    deployed
                  </a>
                </small>
                <br />
                A team built application. A showcase of my work 4 months ago and how far I've come.
                This application is designed to aid your search in your quest to adopt a dog by providing
                a search for all pets adoptable within acceptable ranges for the owner (breed, distance, good with kids, etc.)
              </p>
              <p>
                <strong>Stack: </strong>
                Materialize CSS, JavaScript, HTML, RESTful APIs
              </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default ThirdProject;