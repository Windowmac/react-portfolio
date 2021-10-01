import Headshot from '../Headshot/Headshot';
import Nav from '../Nav/Nav';

const Header = (props) => (
  <section className="section">
    <div className="box">
      <Headshot />
      <Nav sectionDisplay={props.sectionDisplay} handleSectionDisplay={props.handleSectionDisplay}/>
    </div>
  </section>
);

export default Header;
