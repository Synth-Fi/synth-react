export default function StackedWrapper(props) {
    return (
        <div className="">
            <div className="bg-yellow rounded-2xl stack-section-item">
                <div className="bg-blue stack-section-item ">
                    <div className="bg-purple stack-section-item text-left ">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>);
}