import Item from "./Item";
import ItemModel from "../models/item";

interface PackingListProps {
  items: ItemModel[]
}

export default function PackingList({items}: PackingListProps): JSX.Element {
  return (
    <div className="list">
      <ul>
        {items.map(item =><Item item={item}/>)}
      </ul>
    </div>
    );
}