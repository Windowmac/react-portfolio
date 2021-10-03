const ThirdProject = () => (
    <div
      className="box project-box"
      style={{ margin: '2rem', padding: '1.25rem' }}
    >
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure
              className="image"
              style={{ width: '250px', height: '150px' }}
            >
              <img
                className="project-pic"
                src="/images/Doggo-finder-page1.png"
                alt="Doggo Finder first page"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
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
                This application is designed to aid your search in your quest to adopt a dog by providing
                a search for all pets adoptable within acceptable ranges for the owner (breed, distance, good with kids, etc.)
              </p>
              <p>
                <strong>Stack: </strong>
                Materialize CSS, JavaScript, HTML, RESTful APIs
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
  
  export default ThirdProject;