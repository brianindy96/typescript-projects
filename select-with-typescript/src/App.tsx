import './App.css'
import Select from './components/Select'
import { useState } from 'react';

function App() {

  const options = [
    { label: "Pop", value: 1},
    { label: "Rock", value: 2},
    { label: "R&B", value: 3},
    { label: "Hiphop", value: 4},
    { label: "Indie Rock", value: 5},
    { label: "Reggae", value: 6},
  ];

  // value here can be any of the options, or undefined, when no value is given yet
  const [value, setValue] = useState<typeof options[0] | undefined >(options[0]);

  

  return (
    <div className="App">
      <Select options={options} value={value} onChange={o => setValue(o)} />
    </div>
  )
}

export default App
