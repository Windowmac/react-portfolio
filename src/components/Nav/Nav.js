import './Nav.css'
import NavButton from '../NavButton/NavButton'

const Nav = (props) => (
  <div className="columns is-centered">
      <NavButton title="Tech Stack" handleSectionDisplay={props.handleSectionDisplay}/>
      <NavButton title="Projects" handleSectionDisplay={props.handleSectionDisplay}/>
      <NavButton title="Contact" handleSectionDisplay={props.handleSectionDisplay}/>
      <NavButton title="Resume" handleSectionDisplay={props.handleSectionDisplay}/>
  </div>
);

export default Nav;