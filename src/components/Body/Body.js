import getAPI from '../getAPI';
import { useEffect, useState } from 'react';
import Graph from './Graph'

const Body = (props) => {
  const techStackCheck = props.sectionDisplay === 'Tech Stack' ? true : false;
  const [displayState, setDisplayState] = useState('');
  
    return (
    <div>
      {useEffect(() => {
        const getLanguages = async () => {
          const languages = await getAPI();
          return languages;
        };

        getLanguages().then(languages => setDisplayState(<Graph languages={languages}/>));
        
      }, [techStackCheck])}
      {displayState}
    </div>
  );
};

export default Body;
