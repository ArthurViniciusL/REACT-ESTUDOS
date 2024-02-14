import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props); // chama o construtor de Component.
    // this.changeName = this.changeName.bind(this);
    this.state = { name: 'Usuário', counter: 0 }
  }

  changeName = () => {
    this.setState({name: 'Arthur Vinicius'});
  }

  countNumber = (event) => {
    const { counter } = this.state;
    this.setState({counter: counter + 1});
  }


  render() {
    const { name } = this.state;
    const { counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Olá {name} - {counter} 
          </p>
          
          <button  onClick={this.changeName} >
            Mudar nome
          </button>

          <button onClick={this.countNumber}>
            Contar
          </button>

          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            Learn React
          </a>

        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá, mundo!
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

