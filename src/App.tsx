import { useState } from "react";
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

const App = () => {
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const addTodo = (task: string) => {
    const addNewToDo: Todo = {
      id: toDos.length + 1,
      task,
      isCompleted: completed,
    };

    setToDos([...toDos, addNewToDo]);
    setTask("");
    setCompleted(false);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add Todos here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <button onClick={() => addTodo(task)}>Add ToDo</button>

      <ul>
        {toDos.map((item) => {
          return (
            <li key={item.id}>
              <b>Task: </b>
              {item.task}, Completed:
              {item.isCompleted ? "COMPLETED" : "INCOMPLETE"}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
