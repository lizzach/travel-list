import Item from "./Item";

interface PackingListProps {
  items: [
    {
      id: number;
      description: string;
      quantity: number;
      packed: boolean;
    }
  ]
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