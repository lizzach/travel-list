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

  function handleDeleteItem(id: number) {
    setItems(items=>items.filter(item => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems(items => 
      items.map(item => 
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm("This action will delete all items from your list. Please confirm this action.")
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem} 
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  )
}

export default App
