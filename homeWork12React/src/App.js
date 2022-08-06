import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import TodoList from "./components/ToDoList/ToDoList";
import TodoShowAll from "./components/TodoShowAll/TodoShowAll";
import Welcome from "./components/Welcome/Welcome";
import MainPage from "./Page/MainPage/MainPage";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Welcome />}></Route>
        <Route path="aboutus" element={<About />} />
        <Route path="todoList/" element={<TodoList />} />
        <Route path="todoList/:id" element={<TodoShowAll />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
