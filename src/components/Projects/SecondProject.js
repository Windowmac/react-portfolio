import soundgraphImg from './images/soundgraph-play.png';

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
              src={soundgraphImg}
              alt="soundgraph pic"
              href="https://windowmac-soundgraph.netlify.app/"
            />
          </figure>
        </div>
        <div className="column">
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
            <br />A solo-built application. An interactive sound generator that
            allows the user to play 3 octave ranges with touches/clicks on the
            screen - eventually record and play your own sounds as well!
          </p>
          <p>
            <strong>Stack: </strong>
            MongoDB, Lambda, Javascript, HTML/CSS, AudioContext / MediaRecorder
            API, Bulma
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SecondProject;
