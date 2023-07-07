import './App.css';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Products from './Components/Products';
import Tags from './Components/Tags';

function App() {
  return (
    <div className="App">
      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
      <Tags></Tags>
      <Products></Products>
    </div>
  );
}

export default App;
