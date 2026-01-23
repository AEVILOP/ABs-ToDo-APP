/**
 * TODO INPUT COMPONENT - TodoInput.jsx
 * 
 * This component is responsible for:
 * - Capturing user input for new todo items
 * - Validating input (preventing empty todos)
 * - Handling form submission
 * - Clearing input field after adding a todo
 * - Providing responsive form layout for all screen sizes
 */

import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
    // STATE: Stores the current input value being typed by the user
    const [input, setInput] = useState('');

    // FUNCTION: HANDLE FORM SUBMISSION
    // Called when user clicks "Add" button or presses Enter
    // - Prevents default form submission behavior
    // - Validates that input is not empty
    // - Calls addTodo to add the new item
    // - Clears the input field for next entry
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        addTodo(input);
        setInput('');
    };

    // RENDER: INPUT FORM WITH RESPONSIVE DESIGN
    return (
        <form onSubmit={handleSubmit} className="mb-4 sm:mb-6">
            {/* FORM CONTAINER - Responsive flex layout */}
            <div className="flex flex-col sm:flex-row gap-2">
                {/* TEXT INPUT FIELD
                    - Accepts todo description
                    - Shows focus ring when active
                    - Responsive sizing (mobile: full width, desktop: auto) */}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new todo..."
                    className="flex-1 px-3 sm:px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />

                {/* SUBMIT BUTTON
                    - Triggers form submission
                    - Hover effect for better UX
                    - Responsive sizing (mobile: full width, desktop: auto) */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition w-full sm:w-auto text-sm sm:text-base"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default TodoInput;
