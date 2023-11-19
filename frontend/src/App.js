import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Search from './pages/Search.jsx';
import Learning from './pages/Learning.jsx';
import Review from './pages/Review.jsx';
import Header from './components/Header.jsx';
const App = () => {
  return (
    <BrowserRouter> 
      <Header>
      </Header>
      <Sidebar>
        <Routes>
          <Route path = "/"element = {<Search/>} />
          <Route path = "/search"element = {<Search/>} />
          <Route path = "/learning"element = {<Learning/>} />
          <Route path = "/review"element = {<Review/>} />
        </Routes>
      </Sidebar>
      
    </BrowserRouter>
  );
};

export default App;

