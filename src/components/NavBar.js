import React, {Component} from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../App.css"
class Navbar  extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h3>Context App</h3>
            </nav>
        );
    }
}
 
export default Navbar;