/**
 * NAVBAR COMPONENT - navbar.jsx
 * Provides the top navigation bar with app branding, statistics, and navigation
 */

import React, { useState, useEffect } from "react"

const Navbar = ({ todos = [], onColorChange }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [aboutOpen, setAboutOpen] = useState(false)
    const [settingsOpen, setSettingsOpen] = useState(false)
    const [themeColor, setThemeColor] = useState(
        () => localStorage.getItem("themeColor") || "blue"
    )

    const completedCount = todos.filter(todo => todo.completed).length
    const totalCount = todos.length
    const pendingCount = totalCount - completedCount

    useEffect(() => {
        localStorage.setItem("themeColor", themeColor)
        onColorChange?.(themeColor)
    }, [themeColor, onColorChange])

    const colorOptions = [
        { name: "Blue", value: "blue", gradient: "from-blue-600 to-blue-500" },
        { name: "Purple", value: "purple", gradient: "from-purple-600 to-purple-500" },
        { name: "Green", value: "green", gradient: "from-green-600 to-green-500" },
        { name: "Red", value: "red", gradient: "from-red-600 to-red-500" },
        { name: "Pink", value: "pink", gradient: "from-pink-600 to-pink-500" },
        { name: "Indigo", value: "indigo", gradient: "from-indigo-600 to-indigo-500" }
    ]

    const activeGradient = colorOptions.find(c => c.value === themeColor)?.gradient

    return (
        <div className={`bg-linear-to-r ${activeGradient} p-3 sm:p-4 shadow-lg sticky top-0 z-50`}>
            <div className="max-w-full mx-auto px-2 sm:px-4">
                {/* MOBILE HEADER */}
                <div className="flex justify-between items-center md:hidden mb-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-full p-1.5">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a6 6 0 100 12H5a1 1 0 100 2h1a8 8 0 100-16h1a1 1 0 000-2 2 2 0 00-2 2v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12.293-1.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414L17.586 4.586l.707-.293z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 className="text-lg sm:text-xl font-bold text-white">TaskMaster</h1>
                    </div>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* DESKTOP HEADER */}
                <div className="hidden md:flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-white rounded-full p-2">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a6 6 0 100 12H5a1 1 0 100 2h1a8 8 0 100-16h1a1 1 0 000-2 2 2 0 00-2 2v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12.293-1.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414L17.586 4.586l.707-.293z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white">TaskMaster</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <p className="text-blue-100 text-xs sm:text-sm">Total Tasks</p>
                            <p className="text-white text-xl sm:text-2xl font-bold">{totalCount}</p>
                        </div>
                        <div className="text-center border-l border-r border-blue-400 px-4 sm:px-6">
                            <p className="text-blue-100 text-xs sm:text-sm">Completed</p>
                            <p className="text-white text-xl sm:text-2xl font-bold">{completedCount}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-blue-100 text-xs sm:text-sm">Pending</p>
                            <p className="text-white text-xl sm:text-2xl font-bold">{pendingCount}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 sm:gap-4">
                        <button onClick={() => setSettingsOpen(true)} className="text-white hover:bg-opacity-20 hover:bg-white px-3 sm:px-4 py-2 rounded transition text-sm sm:text-base">Settings</button>
                        <button onClick={() => setAboutOpen(true)} className="text-white hover:bg-opacity-20 hover:bg-white px-3 sm:px-4 py-2 rounded transition text-sm sm:text-base">About</button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 bg-blue-700 rounded-lg p-3 space-y-3">
                        <div className="grid grid-cols-3 gap-2">
                            <div className="text-center">
                                <p className="text-blue-100 text-xs">Total</p>
                                <p className="text-white text-lg font-bold">{totalCount}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-blue-100 text-xs">Done</p>
                                <p className="text-white text-lg font-bold">{completedCount}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-blue-100 text-xs">Pending</p>
                                <p className="text-white text-lg font-bold">{pendingCount}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button onClick={() => setSettingsOpen(true)} className="text-white hover:bg-opacity-20 hover:bg-white px-3 py-2 rounded transition text-sm text-center w-full">Settings</button>
                            <button onClick={() => setAboutOpen(true)} className="text-white hover:bg-opacity-20 hover:bg-white px-3 py-2 rounded transition text-sm text-center w-full">About</button>
                        </div>
                    </div>
                )}

                {/* ABOUT MODAL */}
                {aboutOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 sm:p-8 shadow-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-white">About Me</h2>
                                <button onClick={() => setAboutOpen(false)} className="text-gray-400 hover:text-white text-2xl"></button>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Welcome to TaskMaster</h3>
                                    <p className="text-gray-300 text-sm">
                                        I'm a passionate developer creating modern, user-friendly applications to help you manage your daily tasks efficiently.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-2">Skills & Technologies</h4>
                                    <p className="text-gray-300 text-sm">
                                        React  JavaScript  Tailwind CSS  Node.js  Full Stack Development
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-2">About This App</h4>
                                    <p className="text-gray-300 text-sm">
                                        TaskMaster is a modern TODO application built with React and Tailwind CSS, designed to help you stay organized and productive.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-700 pt-4">
                                <h4 className="font-semibold text-white mb-3">Connect With Me</h4>
                                <div className="flex items-center gap-3 mb-4">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <a href="https://github.com/AEVILOP" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition font-semibold">
                                        Visit My GitHub
                                    </a>
                                </div>
                                <p className="text-xs text-gray-400">Check out my projects and contributions on GitHub</p>
                            </div>

                            <button onClick={() => setAboutOpen(false)} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* SETTINGS MODAL */}
                {settingsOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 sm:p-8 shadow-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-white">Settings</h2>
                                <button onClick={() => setSettingsOpen(false)} className="text-gray-400 hover:text-white text-2xl"></button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-4">Theme Color</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {colorOptions.map(color => (
                                            <button
                                                key={color.value}
                                                onClick={() => setThemeColor(color.value)}
                                                className={`p-3 rounded-lg font-semibold text-white transition transform ${themeColor === color.value ? "ring-4 ring-white scale-105" : "hover:scale-105"
                                                    } bg-linear-to-r ${color.gradient}`}
                                            >
                                                {color.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-700 pt-4">
                                    <p className="text-sm text-gray-400">
                                        Selected theme: <span className="text-white font-semibold capitalize">{colorOptions.find(c => c.value === themeColor)?.name}</span>
                                    </p>
                                </div>
                            </div>

                            <button onClick={() => setSettingsOpen(false)} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
