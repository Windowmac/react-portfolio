import './NavButton.css';

const NavButton = (props) => (
  <div className="column nav-button" onClick={() => {props.handleSectionDisplay(props.title)}}>
    <h1>{props.title}</h1>
  </div>
);

export default NavButton;
