import ItemModel from "../models/item";

interface ItemProps {
  item: ItemModel;
  onDeleteItem: (id: number) => void;
}

export default function Item({item, onDeleteItem}: ItemProps) {
  return (
  <li>
    <span className={item.packed ? "packed" : ""}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>
  );
}