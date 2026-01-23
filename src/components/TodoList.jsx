/**
 * TODO LIST COMPONENT - TodoList.jsx
 * 
 * This component is responsible for:
 * - Displaying all todo items in the list
 * - Showing progress statistics (completed vs total)
 * - Rendering empty state message when no todos exist
 * - Mapping todos to TodoItem components
 * - Passing callback functions for delete and complete operations
 */

import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    // CALCULATE PROGRESS STATISTICS
    // Counts completed todos and calculates total
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div>
            {/* PROGRESS BAR - Shows completion statistics */}
            {/* Only displayed when there is at least one todo */}
            {totalCount > 0 && (
                <div className="mb-4 p-3 bg-gray-700 rounded-lg">
                    <p className="text-gray-300 text-sm">
                        Progress: <span className="text-blue-400 font-semibold">{completedCount}</span> of <span className="font-semibold">{totalCount}</span> completed
                    </p>
                </div>
            )}

            {/* TODO ITEMS CONTAINER - Displays list of todos or empty message */}
            <div className="space-y-2">
                {/* EMPTY STATE - Shown when no todos exist */}
                {todos.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-400 text-lg">No todos yet. Add one to get started!</p>
                    </div>
                ) : (
                    /* TODO ITEMS MAP
                       - Maps each todo to a TodoItem component
                       - Each TodoItem receives the todo data and callback functions
                       - Unique key ensures proper rendering updates */
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            toggleComplete={toggleComplete}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default TodoList;
