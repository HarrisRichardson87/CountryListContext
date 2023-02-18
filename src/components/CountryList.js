import React, {Component} from "react"
import { CountryContext } from "../context/CountryContext";
import { ThemeContext } from "../context/ThemeContext";
class CountryList extends Component {
    render() { 
        return (
            <ThemeContext.Consumer>{(themeContext) =>{
                // Get the users selected theme
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return(
                    <div style={{ background: theme.bg, color: theme.syntax }}>
                            <CountryContext.Consumer>{(countryContext) =>{
                                // Display the list of coutries from our context
                                const { countries } = countryContext;
                                return (
                                    <ul>
                                        {countries.map(x => <li key={x.name.common}>{x.name.common}</li>)} 
                                    </ul>
                                )
                            }}
                            </CountryContext.Consumer>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default CountryList;