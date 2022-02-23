import { CardData } from './CardData';
import Cards from './Cards';

function App() {

  // CardData.map(data =>console.log(data.heading)); 
  
  return (
    <div className="App">
      <div className="card-container">
        {CardData.map(data => <Cards data={data} /> )}
      </div>
    </div>
  );
}

export default App;
