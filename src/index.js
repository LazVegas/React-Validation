import React, {Component } from "react"
import ReactDOM from "react-dom"
import "./styles/base.css"
import App from "./components/App"
import * as serviceWorker from "./lib/serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
{/* serviceWorker.unregister() */}

class App2 extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
            </div>
        )
    }
}

export default App