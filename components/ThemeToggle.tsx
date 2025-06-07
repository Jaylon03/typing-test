'use client';

import { useState, useEffect } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            // User has a saved preference
            setIsDark(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // No saved preference - default to light (white background)
            setIsDark(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);
  
    const toggleTheme = () => {
        console.log('button clicked')
        console.log('current isDArk', isDark)

        const newTheme = isDark ? 'light' : 'dark';
        console.log('New theme will be:', newTheme)

        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        console.log('theme set to:', newTheme)
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
}