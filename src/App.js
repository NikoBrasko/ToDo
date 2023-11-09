import { useState } from "react";
import "./MainStyle.css";
import MainFrame from "./components/MainFrame";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (value.trim() !== "") {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString().slice(0, 5),
          task: value,
          completed: false,
        }
      ]);
      setValue("");
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const deleteTask = (id) => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  };

  const toggleTask = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const delCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(item => !item.completed));
  };

  const delAll = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <MainFrame handler={onChange} value={value} action={addTask} />
      <div className="tasks">
        {todos.map((item) => (
          <div className="task" key={item.id}>
            <div className="taskTime">
              <p>{item.task}</p>
              <li className="time">{item.time}</li>
            </div>
            <div className="buttons">
              <input type="checkbox" onChange={() => toggleTask(item.id)} />
              <div onClick={() => deleteTask(item.id)} className="delete">
                X
              </div>
            </div>
          </div>
        ))}
        {todos.length !== 0 ? (
          <div className="delButtons">
            <div className="delCompleted" onClick={() => delCompleted()}>
              Delete completed
            </div>
            <div className="delAll" onClick={() => delAll()}>
              Delete all
            </div>
          </div>
        ) : (
          <div className="info">no tasks in a list</div>
        )}
      </div>
    </div>
  );
}

export default App;
