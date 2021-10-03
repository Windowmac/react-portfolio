import soundgraphImg from './images/soundgraph-play.png';

const FirstProject = () => (
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
              src={soundgraphImg}
              alt="soundgraph pic"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>soundgraph</strong>{' '}
              <small>
                <a
                  className="project-link-tag"
                  href="https://github.com/Windowmac/soundgraph"
                >
                  github
                </a>
              </small>{' '}
              <small>
                <a
                  className="project-link-tag"
                  href="https://windowmac-soundgraph.netlify.app/"
                >
                  deployed
                </a>
              </small>
              <br />
              An interactive sound generator that allows the user to play 3
              octave ranges with touches/clicks on the screen - eventually
              record and play your own sounds as well!
            </p>
            <p>
              <strong>Stack: </strong>
              MongoDB, Lambda, Javascript, HTML/CSS, AudioContext/MediaRecorder
              API, Bulma
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
);

export default FirstProject;
