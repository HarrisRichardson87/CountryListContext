import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
class ThemeToggle extends Component {
    render() { 
        return (
            <ThemeContext.Consumer>{(context) =>{
                return <button onClick={context.toggleTheme}>Toggle Theme</button>
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default ThemeToggle;