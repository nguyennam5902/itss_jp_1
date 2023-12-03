import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Search from './pages/Search.jsx';
import Learning from './pages/Learning.jsx';
import Review from './pages/Review.jsx';
import Header from './components/Header.jsx';
import Learning_topic from './pages/Learning_topic.jsx';
import Word_detail from './pages/Word_detail.jsx';

import Vocabulary from './pages/admin/Vocabulary.jsx';
import ApproveComments from './pages/admin/ApproveComments.jsx';

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
          <Route path = "/learning/learning_topic/:id" element = {<Learning_topic/>}/>
          <Route path = "/search/words/:id" element = {<Word_detail/>}/>
          <Route path = "/learning/learning_topic/:word_id/words/:id" element = {<Word_detail/>}/>

          {/* admin page */}
          <Route path = "admin/vocabulary_manage" element = {<Vocabulary/>}/>
          <Route path = "admin/approve_comments" element = {<ApproveComments/>}/>

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

