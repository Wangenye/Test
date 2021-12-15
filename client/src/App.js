import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginPage from './components/LoginScreen'
import SignUpPage from './components/SignUpPage'
import SingleForum from './components/forumComponents/SingleForum'
import CreatePage from './components/forumComponents/CreatePage'


function App() {
  return (
    <div className="App">
  <Router>
    <NavBar/>
    <Routes>
       <Route  path="/" element={<Home/>}/>
     <Route  path="/login" element={<LoginPage />}/>
      <Route  path="/register" element={<SignUpPage/>}/> 
      <Route  path="/forum/:id" element={<SingleForum/>}/>
      <Route path="/forum/create/:id" element={<CreatePage/>}/>
    </Routes>
  </Router>
  </div>
  );
}

export default App;
