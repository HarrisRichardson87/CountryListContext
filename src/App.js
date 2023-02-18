import './App.css';
import Navbar from './components/NavBar';
import Booklist from './components/CountryList';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import UserAuthContextProvider from './context/UserAuthContext';
import CountryContextProvider from './context/CountryContext';
function App() {
  return (
    <div className="App">
        <UserAuthContextProvider>
        <ThemeContextProvider>
            <ThemeToggle/>
            <Navbar/>
            <CountryContextProvider>
              <Booklist/>
            </CountryContextProvider>
        </ThemeContextProvider>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;
