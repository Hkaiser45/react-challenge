import data from "../data/data.json";
import Card from "./Card";

function CardList() {
    return <div>
        {data.map((element) =>
            <li key={element.id} className="card">
                <Card
                    data={element}
                />
            </li>
        )}
    </div>
};
export default CardList;