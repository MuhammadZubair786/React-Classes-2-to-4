import './App.css';
import Child from './child';
import {GlobalProvider} from './Store/GlobalState'

function App() {
  return (
    <GlobalProvider >
    <div className="App">
      <Child/>
    </div>
    </GlobalProvider >
  );
}

export default App;
