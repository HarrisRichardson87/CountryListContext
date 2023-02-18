import React, {createContext, Component} from 'react';

export const CountryContext = createContext();

class CountryContextProvider extends Component {
    state = { 
        countries:[]
    }
    async componentDidMount(){
        const countries = await this.fetchData();

        // Set the country list 
        this.setState({ countries });
    }   
    fetchData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if (!response.ok) {
          throw new Error('Data coud not be fetched!')
        } else { 
          return response.json();
        }
    } 
    render() { 
        const { children } = this.props;
        return (
            <CountryContext.Provider value={{...this.state }}>
                {children}
            </CountryContext.Provider>
        );
    }
}
 
export default CountryContextProvider;