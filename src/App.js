import './App.css';
import Payment from './pages/Payment';
import Student from './pages/Student';
import Receipt from './pages/Receipt';
import Report from './pages/Report';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup';
import OnOffBtn from './components/pages/Students/OnOffBtn';
import Form from './components/pages/Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index  path='/' element ={<Signup/>}/>
          <Route path='/pages/Signup' element ={<Signup/>}></Route>
          <Route  path='/pages/Student' element={<Student/>}/>
          <Route path='/pages/Receipts' element ={<Receipt  />}/>
          <Route path='/pages/Report' element={<Report/>}></Route>
          <Route path='/components/pages/Students/OnOffBtn' element={<OnOffBtn/>}></Route>
          <Route path='/pages/Form' element={<Form/>}></Route>
          <Route path='/pages/Payment' element={<Payment/>}></Route>
          <Route path="*" element={<NoPage />} ></Route>
        <Route path='/pages/Create' element={<Create/>}></Route>
          <Route path='/pages/Update' element={Update}> </Route>


          <Route path='/pages/Form' element={<Form/>} >  </Route>
          
        </Route>


         
      </Routes>
    </BrowserRouter>

  );
}

export default App;
