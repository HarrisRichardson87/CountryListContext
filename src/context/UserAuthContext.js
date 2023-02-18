import React, {createContext, Component} from 'react';

export const UserAuthContext = createContext();

class UserAuthContextProvider extends Component {
    state = { 
        isAuthenticated:false
    }
    async componentDidMount(){
        // Make sure user can make the ws call
        const userCanMakeWSCall = await this.fetchData();
        if(userCanMakeWSCall)
            this.setState({ isAuthenticated: true });
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
            <UserAuthContext.Provider value={{...this.state }}>
                {children}
            </UserAuthContext.Provider>
        );
    }
}
 
export default UserAuthContextProvider;