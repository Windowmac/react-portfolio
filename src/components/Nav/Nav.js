import './Nav.css'
import NavButton from '../NavButton/NavButton'

const Nav = () => (
  <div className="columns is-centered">
      <NavButton title="About Me"/>
      <NavButton title="Projects"/>
      <NavButton title="Contact"/>
      <NavButton title="Resume"/>
  </div>
);

export default Nav;