import Item from "./Item";
import ItemModel from "../models/item";

interface PackingListProps {
  items: ItemModel[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function PackingList({items, onDeleteItem, onToggleItem}: PackingListProps): JSX.Element {
  return (
    <div className="list">
      <ul>
        {items.map(item =>
          <Item 
            item={item}
            key={item.id} 
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
          )
        }
      </ul>
    </div>
    );
}