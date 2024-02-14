import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts:[
        {
          id:0,
          title: 'Titulo 1',
          body: 'Corpo 1'
        },
        {
          id:1,
          title: 'Titulo 2',
          body: 'Corpo 2'
        },
        {
          id:2,
          title: 'Titulo 3',
          body: 'Corpo 3'
        }
      ]
    }
  }

  render() {

    const { posts } = this.state;

    return (
      <div className="App">
        {
          posts.map(post => (
            <main key={post.id}>
              <h1>{ post.title }</h1>
              <p>{ post.body }</p>
            </main>
          ))
        }
      </div>
    );
  }
}

export default App;

