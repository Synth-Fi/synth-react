export default function StackedWrapper(props) {
    return (
        <div className="grid grid-flow-row">
                <div className="bg-yellow rounded-2xl stack-section-item">
                    <div className="bg-blue stack-section-item ">
                        <div className="bg-purple stack-section-item text-left ">
                            <p className="p-4 text-3xl">{props.main}</p>
                            <p className="p-4 text-lg">{props.secondary}</p>
                        </div>
                    </div>
                    <div>
                        <p>With Support for </p>
                        {/* <img src></img> */}
                    </div>
                </div>
            </div>);
}