import 'bulma/css/bulma.min.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import Graph from './components/Graph/Graph';
import Projects from './components/Projects/Projects';

const App = () => {
  const handleSectionDisplay = (displayState) => {
    const displayDirections = {
      'Tech Stack': () => <Graph sectionDisplay={sectionDisplay}/>,
      'Projects': () => <Projects sectionDisplay={sectionDisplay}/>
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
