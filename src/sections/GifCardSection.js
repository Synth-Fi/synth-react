import OutlinedBox from "../components/OutlinedBox";

export default function GifCardSection(props) {
    return (
        <div className="bg-card-gif bg-contain bg-no-repeat p-4 bg-right items-center">
            {props.outlined_boxes.map((box, i) => {
                return (
                    <OutlinedBox {...box} i={i} />
                );
            })}
        </div>
    );
}