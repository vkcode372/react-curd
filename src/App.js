import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
function App() {
  return (
    <>

<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/view/:id" element={<View />} />
    <Route exact path="/edit/:id" element={<Edit />} />
  </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
