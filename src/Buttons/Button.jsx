export function Button({val, func}){
    return (
        <button className="bg-white bg-opacity-10 text-white py-5 hover:bg-opacity-20 active:bg-opacity-50"
        onClick={e => func(val)}> {val} </button>
    )
}