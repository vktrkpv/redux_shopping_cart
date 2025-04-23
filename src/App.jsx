import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Home';

function App() {

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/shop" element={<Shop />} ></Route>
        </Routes>
      </Router>
    
  )
}

export default App
