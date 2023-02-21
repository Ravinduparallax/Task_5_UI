import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Body from './component/Body';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    return(
        <div className = "container">
            <Header />
            <Dashboard />
            <Body />
        </div>
    );
}

export default App;