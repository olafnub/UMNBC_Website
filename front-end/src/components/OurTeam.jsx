import Officer from "./Officer.jsx";
import officers from "../utils/team.js";

function OurTeam() {
    return (
        <div className="officer-wrap">
          {officers.map((officer) => <Officer key = {officer.name} 
          img={officer.img}
          alt = {officer.alt}
          name={officer.name}
          title={officer.title}
          />)}
          </div>
    )
}
export default OurTeam;