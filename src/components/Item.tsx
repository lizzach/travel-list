import ItemModel from "../models/item";

interface ItemProps {
  item: ItemModel;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function Item({item, onDeleteItem, onToggleItem}: ItemProps) {
  return (
  <li>
    <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)}></input>
    <span className={item.packed ? "packed" : ""}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>
  );
}