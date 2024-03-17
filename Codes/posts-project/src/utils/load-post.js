async function getPosts() {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const [posts] = await Promise.all([postsResponse]);
    return posts.json();
}

async function getPhotos() {
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [photos] = await Promise.all([photosResponse]);
    return photos.json();
}

function joinPostsAndPhotos(postJson, photosJson) {
    return postJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url }
    });
}


export async function loadPosts() {
    const postsJson = await getPosts();
    const photosJson = await getPhotos();
    const postsAndPhotos = await joinPostsAndPhotos(postsJson, photosJson);

    return postsAndPhotos;
}