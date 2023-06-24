
import Payments from './pages/Payments';
import Student from './pages/Student';
import Receipts from './pages/Receipts';
import Report from './pages/Report';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element ={<Signup/>}/>
          <Route  path='/pages/Student' element={<Student/>}/>
          <Route path='/pages/Receipts' element ={<Receipts  />}/>
          <Route path='./pages/Report' element={<Report/>}></Route>
          
          <Route path='/pages/Payments' element={<Payments/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
