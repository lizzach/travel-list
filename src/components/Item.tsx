interface ItemProps {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  }
}

export default function Item({item}: ItemProps) {
  return (
  <li>
    <span>
    {item.quantity} {item.description}
    </span>
    <button>❌</button>
  </li>
  );
}