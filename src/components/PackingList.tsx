import Item from "./Item";

const initialItems = [
  {
    id: 1,
    description: "toothbrush",
    quantity: 1,
    packed: false
  },
  {
    id: 2,
    description: "deodorant",
    quantity: 1,
    packed: true
  }
]

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