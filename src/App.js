import logo from "./logo.png";
import "./App.css";
import dictionary from "./dictionary";

export default function App(){
    return(
        <div className="App">
            <div className="container">
        <header className="App-header">
            <img src={logo} className="App-logo img-fluid" alt="logo"/>
             </header>

            </div>
            <main>
                <dictionary/>
            </main>
            <footer className="text-center"> 
                <small>Coded by Rudo Machisi</small>
                
                </footer>

            </div>

          </div>
    );
}