import classes from  './App.module.css';
import {Header} from './components/Header'
import {Nav} from './components/Nav'
import {Profile} from "./components/Profile";

function App() {
    return (
        <div className={classes.wrapper}>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
