import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<SignIn/>}/>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
