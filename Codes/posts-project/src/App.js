import './App.css';
import { Component } from 'react';

import { loadPosts } from './utils/load-post';
import { Posts } from './components/Posts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  //react lifecycle method
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    // inserindo os dados no meu objeto
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts}></Posts>
      </section>
    );
  }
}

export default App;

