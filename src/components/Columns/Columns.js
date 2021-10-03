import Graph from "../Graph/Graph";
import TechStack from "../TechStack/TechStack";
const Columns = () => (
    <div className="box" style={{background: 'black', margin: '25px', color: 'whitesmoke'}}>
        <div className="columns">
            <div className="column">
                <Graph />
            </div>
            <div className="column">
                <TechStack />
            </div>
        </div>
    </div>
);

export default Columns;