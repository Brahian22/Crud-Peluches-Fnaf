import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Navbar } from "../components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/form" element={<Form/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
