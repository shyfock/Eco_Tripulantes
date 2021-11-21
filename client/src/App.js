import AppRouter from './routes/Routes';
import Navegation from './layouts/Navegation';
import './App.css';


function App() {
    return (
      <div className="App">
        {/* <Navegation/> */}
        <AppRouter/>
      </div>
    );
}

export default App;
