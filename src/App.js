import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/header';
import Footer from './components/footer';
import ItemList from './pages/dataTable';
function App() {
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path='/' element={<ItemList/>} />
</Routes>
<Footer/>
    </div>
  );
}

export default App;
