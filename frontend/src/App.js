import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Search from "./pages/Search.jsx";
import Learning from "./pages/Learning.jsx";
import Test from "./pages/Testing.jsx";
import Header from "./components/Header.jsx";
import Learning_topic from "./pages/Learning_topic.jsx";
import Word_detail from "./pages/Word_detail.jsx";
import Vocabulary from "./pages/admin/Vocabulary.jsx";
import ApproveComments from "./pages/admin/ApproveComments.jsx";
import Word from "./pages/admin/Word.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Test_detail from "./pages/Test_detail.jsx";
import Bookmark from "./pages/Bookmark.jsx";
const MainScreen = () => {
  return (
    <div className="main_screen">
      <Sidebar>
        <div className="content h-full">
          <Header />
          <Outlet />
        </div>
      </Sidebar>
    </div>
  );
};

const App = () => {
  // Tạo một đối tượng người dùng
  const userObject = {
    user_id: 1,
    username: "exampleUser",
    email: "user@example.com",
    password: "12345678",
    full_name: "exampleUser",
    birthday: "1990-12-12",
    job: "Teacher",
  //  create_time: Date
  };

  // Chuyển đối tượng người dùng thành chuỗi JSON
  const userJson = JSON.stringify(userObject);

  // Lưu chuỗi JSON vào sessionStorage
  sessionStorage.setItem("user", userJson);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MainScreen />}>
          <Route index element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/learning/learning_topic/:id"
            element={<Learning_topic />}
          />
          <Route path="/search/words/:id" element={<Word_detail />} />
          <Route
            path="/learning/learning_topic/:word_id/words/:id"
            element={<Word_detail />}
          />
          <Route
            path="/test/:id"
            element={<Test_detail />}
          />
          <Route path="/bookmark" element = {<Bookmark/>}/>

          {/* admin page */}
          <Route path="admin/topic_manage" element={<Vocabulary />} />
          <Route path="admin/approve_comments" element={<ApproveComments />} />
          <Route path="admin/topic_manage/:id" element={<Word />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
