import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TaskProvider} from './Context/Taskcontext';
import Login from './Component/login.js';
import Task from './Component/Task.js';
import Note from './Component/Note.js';
import Card from './Component/Cards.js';
// import Note from './Component/Note.js';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>,
  },
  {
    path:'/addtask',
    element:<Card/>,
  },
  
  {
    path:'/note',
    element:<Note/>,
  },
  
]);
const App  = ()=> {
  return (
    <TaskProvider>
      <RouterProvider router={router}/>
      </TaskProvider>
    )

}
export default App;