import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import ItemModel from './models/item';
import "./index.css";
import { useState } from 'react';

function App() {

  const [items, setItems] = useState<ItemModel[]>([]);

  function handleAddItem(newItem: ItemModel) {
    setItems(items=> [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  )
}

export default App
