'use client'
import { ThemeContext } from '@/app/ThemeContext';
import React, { useContext } from 'react'

const ToggleThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌞  Light Mode' : '🌜  Dark Mode'}
        </button>
    )
}

export default ToggleThemeButton
