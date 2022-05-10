import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <a target="_blank" href="https://icons8.com/icon/iOnufE9Xw9Dc/partly-cloudy-day"></a><a target="_blank" href="https://icons8.com"></a>
      <div class="d-flex bd-highlight">
        <Home />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
