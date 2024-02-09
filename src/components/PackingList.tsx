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

export default function PackingList(): JSX.Element {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item =><Item item={item}/>)}
      </ul>
    </div>
    );
}