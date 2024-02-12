import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import "./index.css";
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items}/>
      <Stats />
    </div>
  )
}

export default App
