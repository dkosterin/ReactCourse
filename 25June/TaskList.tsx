import { useState } from 'react'

/*
Список задач
1. Компонент TaskItem выводит название задачи, ..., кнопка "Удалить"
2. Компонент TaskList выводит списком TaskItem, кнопка "Добавить" с полем для ввода
3. Заставить кнопки работать
*/

type Task = {
  id: number,
  title: string
}

function TaskItem({task, onDelete}: {task: Task, onDelete: () => void}) {
  return (
    <div>
      {task.title}
      <button onClick={onDelete}>Удалить</button>
    </div>
  )
}

function TaskList({tasks, setTasks}: {tasks: Task[], 
  setTasks: (tasks: Task[]) => void}) {

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const lastId = tasks[tasks.length - 1].id;
  return (
    <>
    {tasks.map((task: Task) => <TaskItem key={task.id} task={task}
    onDelete={() => setTasks(tasks.filter(taskItem => task.id !== taskItem.id))} />)}
    <input type="text" onChange={(e) => setNewTaskTitle(e.target.value)} />
    <button onClick={() => setTasks([...tasks, 
      {id: lastId + 1, title: newTaskTitle}])}>Добавить</button>
    </>
  )
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Задача 1"
    },
    {
      id: 2,
      title: "Задача 2"
    }
  ])

  return (
    <>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
