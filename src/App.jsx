import './App.css';

function App() {

  const clients = [
    {
      name: 'Mr.Hoffmann',
      age: 52,
      isPremium: false,
      country: 'de',
    },
    {
      name: 'Ms. Smith',
      age: 23,
      isPremium: true,
      country: 'en',
    },
    {
      name: 'Amélie',
      age: 25,
      isPremium: false,
      country: 'fr',
    },
    {
      name: 'Paco paquito...',
      age: 67,
      isPremium: true,
      country: 'es',
    },
  ]

  return (
    <div className="App">
      <h1>Hotel webpage</h1>
    </div>
  );
}

export default App;
