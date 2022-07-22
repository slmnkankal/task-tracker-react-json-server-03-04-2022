
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [showAddTask, setShowAddTask] = useState(false);
  
  const baseUrl ="http://localhost:3000/tasks";
  
  //CRUD Operations create read update delete

  //* Fetch Tasks with fetch

  // const fetchTasks = async() => {
  //   try {
  //     const res = await fetch(baseUrl);
  //   const data = await res.json();
  //   console.log(res);
  //   setTasks(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //* Fetch Tasks with axios
  const fetchTasks = async () => {
    //const res = await axios.get(baseUrl);
    const {data} = await axios.get(baseUrl);
    //console.log(data)
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //* Delete Task
  const deleteTask = async (deletedTaskId) => {
    //console.log(deletedTaskId);
    //await axios.delete(`${baseUrl}/${deletedTaskId}`);
    await axios.delete(baseUrl + "/" + deletedTaskId);
    fetchTasks();
  }; 

  // const deleteTask = (deletedTaskId) => {
  //   console.log("delete Task", deletedTaskId);
  //   setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  // };

  //* Add Task with fetch
  // const addTask = async (newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method: "POST",
  //     headers:{
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   await res.json();
  //   console.log(res);
  //   fetchTasks();
  // }

  //* Add Task with axios
  const addTask = async(newTask) => {
    const res = await axios.post(baseUrl, newTask);
    console.log(res)
    fetchTasks();
  }

  

  //* Toggle Done
  const toggleDone = async (toggleDoneId) => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);
    console.log(data);
    //const updatedTask = {...data, isDone: !data.isDone };
    //await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
    await axios.patch(`${baseUrl}/${toggleDoneId}`, { isDone: !data.isDone })
    fetchTasks();
  }

  // const toggleDone = (toggleDoneId) => {
  //   console.log('double click', toggleDoneId);
  //   setTasks(
  //     tasks.map((task) => 
  //       task.id === toggleDoneId ? {...task, isDone : !task.isDone} : task));
  // };

  // Toggle Show
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header 
      title="Task Tracker" 
      showAddTask={showAddTask} 
      toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask}/>}
      
      {
        tasks.length > 0 ? ( 
          <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} /> 
          ) : (
          <h2 style={{ textAlign: "center" }}>No Tasks To Show</h2>
        )
      }
    </div>
  );
}

export default App;
