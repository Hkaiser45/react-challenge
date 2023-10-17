import { useState } from "react";

function Card({ data}) {
    const { add, setAdd } = useState(0);
    const clickAdd = () => {
        setAdd(add)
    };
    return <div>
        <img className="img" src={data.image} alt={data.category} />
        <title>{data.title}</title>
        <p>{data.description}</p>
        <button className="button" onclick={clickAdd}>Add to Cart</button>
    </div>
}
export default Card;