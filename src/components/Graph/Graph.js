import getAPI from '../getAPI';
import { useEffect } from 'react';

const Graph = (props) => {

    return (
        <div>
            
          {useEffect(() => {
            const getLanguages = async () => {
              const languages = await getAPI();
              return languages;
            };

            const buildGraph = (langObj => {
                console.log('langObj is: ', langObj);
            })
    
            getLanguages().then(buildGraph);
            
          }, [])}
          {props.sectionDisplay}
        </div>
    );
}



export default Graph;