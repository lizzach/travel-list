import ItemModel from "../models/item"

interface StatsProps {
  items: ItemModel[];
}

export default function Stats({items}: StatsProps): JSX.Element {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list!</em>
      </p>
    )
  }
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentPacked = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100)

  return (
    <footer className="stats">
        <em>
          {percentPacked === 100 
            ? 'You packed everything! You are ready to go.' 
            : `You have ${numItems} items on your list, and you already packed ${percentPacked}%`
          }
        </em>
    </footer>)
}