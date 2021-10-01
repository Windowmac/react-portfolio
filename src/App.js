import 'bulma/css/bulma.min.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { useState } from 'react';

const App = () => {
  const handleSectionDisplay = (text) => {
    setSectionDisplay(text);
  }

  const [sectionDisplay, setSectionDisplay] = useState('Tech Stack');


  return (
    <div>
      <Header sectionDisplay={sectionDisplay} handleSectionDisplay={handleSectionDisplay}/>
      <Body sectionDisplay={sectionDisplay} />
    </div>
  );
};

export default App;
