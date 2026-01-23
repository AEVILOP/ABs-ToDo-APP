/**
 * MAIN APP COMPONENT - App.jsx
 * 
 * This is the root component of the TODO application. It manages:
 * - Global todo state (todos list)
 * - Theme color state for the application
 * - Local storage persistence for todos
 * - Main todo operations (add, delete, toggle complete)
 * - Rendering of Navbar and main content area
 */

import './App.css'
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar.jsx'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // STATE MANAGEMENT
  // Stores all todo items in an array
  const [todos, setTodos] = useState([]);

  // Stores the currently selected theme color, retrieved from localStorage
  const [themeColor, setThemeColor] = useState(() => {
    return localStorage.getItem('themeColor') || 'blue';
  });

  // COLOR OPTIONS - Maps color names to hex values for the theme system
  const colorOptions = {
    blue: '#3b82f6',
    purple: '#a855f7',
    green: '#22c55e',
    red: '#ef4444',
    pink: '#ec4899',
    indigo: '#6366f1'
  };

  // EFFECT: LOAD TODOS FROM LOCAL STORAGE
  // Runs on component mount to retrieve previously saved todos
  // This ensures todos persist across browser sessions
  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      if (storedTodos.length > 0) setTodos(storedTodos);
    };
    loadTodos();
  }, []);

  // EFFECT: SAVE TODOS TO LOCAL STORAGE
  // Runs whenever the todos array changes
  // This automatically saves todos to browser storage for persistence
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // FUNCTION: ADD TODO
  // Creates a new todo item with unique ID and adds it to the todos array
  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),           // Unique identifier using timestamp
      text: todoText,            // The todo description
      completed: false           // Initial completion status
    };
    setTodos([...todos, newTodo]);
  };

  // FUNCTION: DELETE TODO
  // Removes a todo item from the array by filtering out the item with matching ID
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // FUNCTION: TOGGLE COMPLETE
  // Switches the completed status of a todo item
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // RENDER: MAIN UI
  return (
    <div className="min-h-screen bg-gray-900">
      {/* NAVBAR COMPONENT - Displays header with stats and navigation options */}
      <Navbar todos={todos} onColorChange={setThemeColor} />

      {/* MAIN CONTAINER - Centers the todo app card on screen */}
      <div className="flex items-center justify-center py-4 sm:py-6 md:py-10 px-4 sm:px-6">
        <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-2xl shadow-lg">
          {/* APP TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">My Todo App</h1>

          {/* DYNAMIC THEME COLOR - Injects CSS variable for theme color */}
          <style>
            {`:root { --theme-color: ${colorOptions[themeColor]}; }`}
          </style>

          {/* TODO INPUT COMPONENT - Allows users to add new todos */}
          <TodoInput addTodo={addTodo} themeColor={themeColor} />

          {/* TODO LIST COMPONENT - Displays all todos with delete and complete options */}
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} themeColor={themeColor} />
        </div>
      </div>
    </div>
  );
}

export default App
