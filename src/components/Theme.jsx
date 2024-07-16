import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import './style.css'

const Theme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return(
        <div className={`container ${theme}`}>
            <h1>Componente</h1>

            <button onClick={toggleTheme}>Alterar tema</button>
        </div>
    );
}

export default Theme;