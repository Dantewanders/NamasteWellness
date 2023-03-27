import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Layout from "./Layout/Layout";


function App() {
  return (
    <div className="App">      
      {/*Each individual Route is wrapped inside of the <Routes> Component */}
      <Routes> {/* Opening tag*/}
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path= "/about" element={<About/>} />
          <Route path= "*" element={<NotFound/>} />
        </Route>
      </Routes>        
      
    </div>
  )
}
export default App;