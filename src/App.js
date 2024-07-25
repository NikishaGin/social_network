import {Nav} from './components/Nav'
import {Profile} from "./components/Profile";
import {Routes, Route} from "react-router-dom";
import {Messages} from "./components/Messages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Nav/>}>
                <Route index element={<Profile/>}/>
                <Route path={'messages'} element={<Messages/>}/>
            </Route>
        </Routes>
    );
}

export default App;
