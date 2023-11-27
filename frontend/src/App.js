import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Search from './pages/Search.jsx';
import Learning from './pages/Learning.jsx';
import Review from './pages/Review.jsx';
import Header from './components/Header.jsx';
import Learning_topic from './pages/Learning_topic.jsx';
import Word_detail from './pages/Word_detail.jsx';
const App = () => {
  return (
    <BrowserRouter> 
      
      <Sidebar>
        <Header>
        </Header>
        <Routes>
          <Route path = "/"element = {<Search/>} />
          <Route path = "/search"element = {<Search/>} />
          <Route path = "/learning"element = {<Learning/>} />
          <Route path = "/review"element = {<Review/>} />
          <Route path = "/learning/learning_topic" element = {<Learning_topic/>}/>
          <Route path = "search/words/:id" element = {<Word_detail/>}/>
          <Route path = "/learning/learning_topic/words/:id" element = {<Word_detail/>}/>
        </Routes>
      </Sidebar>
      
      {/* <Routes>
      <Route path = "/learning/learning_topic" element = {<Learning_topic/>}/>
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;

