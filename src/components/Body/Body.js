import getAPI from "../getAPI";

const Body = (props) => (
    <div>
        {props.sectionDisplay === 'Tech Stack' ? <div>{getAPI().toString()}</div> : <div></div>}
    </div>
);

export default Body;