import ListJobs from "./ListJobs";
import TaskForm from "./TaskForm";
import './App.css'
import { useState } from "react";
import { v4 } from "uuid";

function App() {

  const storedTodoList = localStorage.getItem("todoList");
  const initialTodoList = storedTodoList ? JSON.parse(storedTodoList) : [];

  const [todoList, setTodoList] = useState(initialTodoList);

  const addJob = (input) => {
    const newJob = { id: v4(), name: input, done: false };
    const updatedList = [newJob, ...todoList];
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  }

  const deleteJob = (id) => {
    const updatedList = todoList.filter((job) => job.id !== id);
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  return (
    <main className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <TaskForm onAdd={addJob} />
        {todoList.map((job) => (
          <ListJobs key={job.id} {...job} onDelete={deleteJob} />
        ))}
      </div>
    </main>
  );
}

export default App;
