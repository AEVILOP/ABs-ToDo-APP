/**
 * TODO ITEM COMPONENT - TodoItem.jsx
 * 
 * This component represents a single todo item and handles:
 * - Rendering the todo text
 * - Checkbox for marking todos as complete/incomplete
 * - Delete button to remove the todo
 * - Visual feedback (strike-through) for completed items
 * - Responsive design for all screen sizes
 * - Click handlers for delete and toggle operations
 */

import React from 'react'

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
    return (
        /* MAIN TODO ITEM CONTAINER
           - Flex layout for proper alignment
           - Hover effect for visual feedback
           - Responsive padding and gaps */
        <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition flex-wrap sm:flex-nowrap">

            {/* CHECKBOX - Toggle completion status
               - Checked when todo.completed is true
               - Calls toggleComplete when clicked
               - Blue accent color when checked */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded cursor-pointer accent-blue-500 shrink-0"
            />

            {/* TODO TEXT
               - Displays the todo description
               - Apply strike-through and gray color if completed
               - Responsive text sizing */}
            <span
                className={`flex-1 min-w-0 text-sm sm:text-base ${todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-white'
                    }`}
            >
                {todo.text}
            </span>

            {/* DELETE BUTTON
               - Red color with hover effect
               - Calls deleteTodo when clicked
               - Responsive sizing
               - Prevents text wrapping on mobile */}
            <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold transition shrink-0"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
