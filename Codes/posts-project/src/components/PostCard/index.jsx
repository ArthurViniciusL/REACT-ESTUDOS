export const PostCard = ({id, cover,title, body}) => {
// export const PostCard = (props) => {
    // const {post} = props;
    return (
        <div className="post">
            <img className='img-card' src={cover} alt={title} />
            <div key={id} className="post-content">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}
