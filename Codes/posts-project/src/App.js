import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  //react lifecycle method
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsJson = await this.getPosts();
    const photosJson = await this.getPhotos();
    const postsAndPhotos = await this.joinPostsAndPhotos(postsJson, photosJson);
    // inserindo os dados no meu objeto
    this.setState({ posts: postsAndPhotos });
  }

  getPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const [posts] = await Promise.all([postsResponse]);
    return posts.json();
  }

  getPhotos = async () => {
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [photos] = await Promise.all([photosResponse]);
    return photos.json();
  }

  joinPostsAndPhotos = (postJson, photosJson) => {
    return postJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;

