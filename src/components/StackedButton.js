import React from "react";
import OutlinedBox from "./OutlinedBox";

export default function StackedButton(props) {
    return (
        <div className="text-4xl mt-3">
            <div className="bg-yellow rounded-2xl stack-item">
                <div className="bg-blue stack-item ">
                    <div className="bg-purple stack-item text-center">
                        <p className="p-4 inline-block align-middle">{props.text}</p>
                
                </div>
                </div>
            </div>
        </div>
    );
}