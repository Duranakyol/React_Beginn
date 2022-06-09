import './App.css';
import Header from './components/Header'
import User from './components/User'

const friends = [
  {
    id: 1,
    name: "Ahmet"
  },
  {
    id: 2,
    name: "Tayfun"
  },
  {
    id: 3,
    name: "Gökhan"
  },
  {
    id: 4,
    name: "Ayse"
  }
]


function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hallo React!</h1>
      <User
        name="Duran"
        surname="Akyol"
        // isLoggedIn={false}
        friends={friends}
        adress={{
           title: "Am Appelhorst",
          PLZ : 12353
        }
         } />
    </div>
  );
}

export default App;
