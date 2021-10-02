import 'bulma/css/bulma.min.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import Graph from './components/Graph/Graph';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

const App = () => {
  const handleSectionDisplay = (displayState) => {
    const displayDirections = {
      'Tech Stack': () => <Graph sectionDisplay={sectionDisplay}/>,
      'Projects': () => <Projects sectionDisplay={sectionDisplay}/>,
      'Contact': () => <Contact sectionDisplay={sectionDisplay}/>,
      'Resume': () => <Resume sectionDisplay={sectionDisplay}/>
    };
    return displayDirections[displayState]();
  }

  const [sectionDisplay, setSectionDisplay] = useState('Tech Stack');


  return (
    <div>
      <Header setSectionDisplay={setSectionDisplay}/>
      {handleSectionDisplay(sectionDisplay)}
    </div>
  );
};

export default App;
