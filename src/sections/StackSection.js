import React from "react";
import FilledBox from "../components/FilledBox";
// import OutlinedBox from "../components/OutlinedBox";
import StackedWrapper from "../components/StackedWrapper";

export default function StackSection(props) {
    return (
        <div className="items-center p-4 m-5">
            <p className="text-white text-center text-4xl p-5">
                CDs are out VHS is in 😎
            </p>
            <StackedWrapper>
                <div className="flex flex-cols">
                    <div>
                        <p className="p-4 text-3xl text-bold">{props.main}</p>
                        <p className="p-4 text-lg">{props.secondary}</p>
                    </div>
                <div className="text-center">
                    <p className="text-xl opacity-80">With Support For</p>
                    <img src="./home/logos-img.png" alt="logos" />
                </div>
                </div>
            </StackedWrapper>
            <div>
                <FilledBox {...props.FilledBox} />
            </div>
        </div>

    );
}