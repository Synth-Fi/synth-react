import TeamBox from "../components/TeamBox"
export default function TeamSection(props) {
    return (
        <div className="bg-team-img bg-auto bg-no-repeat bg-center text-center">
            <p className="text-4xl m-3 p-3"> Team 🤓</p>
            {props.team.map(member => {
                return <TeamBox {...member} />
            }
            )}
        </div>);
}