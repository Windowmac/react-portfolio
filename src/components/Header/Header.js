import Headshot from '../Headshot/Headshot';
import Nav from '../Nav/Nav';

const Header = (props) => (
  <section className="section">
    <div className="box">
      <Headshot />
      <Nav setSectionDisplay={props.setSectionDisplay}/>
    </div>
  </section>
);

export default Header;
