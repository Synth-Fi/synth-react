import React from "react";
// import OutlinedBox from "../components/OutlinedBox";
import StackedWrapper from "../components/StackedWrapper";

export default function StackSection(props) {
    return (

        <div className="">
            <StackedWrapper>
                <div className="flex flex-row">
                    <p className="p-4 text-3xl">{props.main}</p>
                    <p className="p-4 text-lg">{props.secondary}</p>
                </div>
                <div className="grid grid-flex">
                    <img src={"../logos-imgs.png"}/>
                </div>
            </StackedWrapper>
        </div>

    );
}