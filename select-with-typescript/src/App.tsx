import './App.css'
import Select from './components/Select'

function App() {

  const options = [
    { label: "Pop", value: 1},
    { label: "Rock", value: 2},
    { label: "R&B", value: 3},
    { label: "Hiphop", value: 4},
    { label: "Indie Rock", value: 5},
    { label: "Reggae", value: 6},
  ];

  return (
    <div className="App">
      <Select options={options} />
    </div>
  )
}

export default App
