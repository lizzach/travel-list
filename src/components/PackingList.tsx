import Item from "./Item";
import ItemModel from "../models/item";

interface PackingListProps {
  items: ItemModel[];
  onDeleteItem: (id: number) => void;
}

export default function PackingList({items, onDeleteItem}: PackingListProps): JSX.Element {
  return (
    <div className="list">
      <ul>
        {items.map(item =><Item item={item} onDeleteItem={onDeleteItem}/>)}
      </ul>
    </div>
    );
}