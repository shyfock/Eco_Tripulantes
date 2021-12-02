import AppRouter from './routes/Routes';
import './App.css';
import Navegation from "./layouts/Navegation";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
    return (
      <div className="App">
        <AppRouter/>
        <Footer />
      </div>
    );
}

export default App;
