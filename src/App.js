import { Route, Routes } from "react-router-dom";
import {WebPage} from "./Components";
import {ContactPage} from './Components'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
