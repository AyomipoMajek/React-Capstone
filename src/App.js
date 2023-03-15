import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Nav from './components/Nav';
import { fetchData } from './Redux/data/dataSlice';
import Card from './components/Card';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/card/:cardId" Component={Card} />
      </Routes>
    </div>
  );
}

export default App;
