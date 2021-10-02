import './NavButton.css';

const NavButton = (props) => (
  <div className="column nav-button" onClick={() => {props.setSectionDisplay(props.title)}}>
    <h1>{props.title}</h1>
  </div>
);

export default NavButton;
