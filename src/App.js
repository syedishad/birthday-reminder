import Data from './Data';
import './App.css';
import List from './List';
import { useState } from 'react';

function App() {
  const [people, Setpeople] = useState(Data);

  // Setpeople(console.log('ClickedME')
  // )

  const ClickHandler = () => {
    Setpeople([])
  }

  const ReturnHandler = () => {
    Setpeople(Data);
  }
  return (
    <main>
      <div className="container">
        <h3>{people.length} BirthDay's Today</h3>
        <List people={people} />

        <button onClick={ClickHandler}>Clear All</button>
        <button onClick={ReturnHandler}>Back</button>

      </div>
    </main>
  );
}

export default App;
