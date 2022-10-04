import logo from './logo.svg'
import './App.css'
import {dashboardIdRoute} from "./routes";

function App() {

    console.log('routes : ', dashboardIdRoute.setRouteParam({ dashId:'12'}).navigate())
    // console.log('routes : ', dashboardIdRoute.setRouteParam({dashId:'12'}).navigate())

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
                http://localhost:3000/ how fast it is
                show speed
                <p>
                    <button type="button" onClick={() => {
                    }}>
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
