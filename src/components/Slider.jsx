export function Slider(props) {
    return (
        <div className={props.className}>
            <div className="flex">
                <div className="ml-3 flex flex-row justify-start items-center gap-x-10">
                    <p className="text-sm">{props.name}</p>
                    <p>|</p>
                </div>
                <div className="w-1/3 mx-8">
                    <input type="range" min="1" max="100" value="100" className={props.className1} />
                </div>
            </div>
        </div>
    )
}