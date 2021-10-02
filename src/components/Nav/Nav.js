import './Nav.css'
import NavButton from '../NavButton/NavButton'

const Nav = (props) => (
  <div className="columns is-centered">
      <NavButton title="Tech Stack" setSectionDisplay={props.setSectionDisplay}/>
      <NavButton title="Projects" setSectionDisplay={props.setSectionDisplay}/>
      <NavButton title="Contact" setSectionDisplay={props.setSectionDisplay}/>
      <NavButton title="Resume" setSectionDisplay={props.setSectionDisplay}/>
  </div>
);

export default Nav;