import React from "react";
import OutlinedBox from "../components/OutlinedBox";


export default function GifCardSection(props) {
    return (
        <div className="bg-card-gif bg-contain p-4 bg-right items-center">
            {props.outlined_boxes.map(box => {
                return (
                    <OutlinedBox {...box} />
                );
            })}
            </div>
    );
}