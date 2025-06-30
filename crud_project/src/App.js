import './App.css';
import Read from './components/Read';
import Form from './components/Form';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/form' element={<Form/>}></Route>
          <Route path='/' element={<Read/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
