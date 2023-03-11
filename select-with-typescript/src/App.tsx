import './App.css'
import Select, { SelectOption } from './components/Select'
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
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined >(options[0]);

  

  return (
    <div className="App">
      {/* Multiple Selects */}
      <Select multiple options={options} value={value1} onChange={o => setValue1(o)} />
      {/* Single Select */}
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
    </div>
  )
}

export default App
