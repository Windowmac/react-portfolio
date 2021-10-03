import Headshot from '../Headshot/Headshot';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = (props) => (
  <section className="section">
    <div className="box header-bg">
      <Headshot />
      <Nav setSectionDisplay={props.setSectionDisplay}/>
    </div>
  </section>
);

export default Header;
