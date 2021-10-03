import Graph from "../Graph/Graph";
import TechStack from "../TechStack/TechStack";
const Columns = () => (
    <>
        <div className="columns">
            <div className="column">
                <Graph />
            </div>
            <div className="column">
                <TechStack />
            </div>
        </div>
    </>
);

export default Columns;