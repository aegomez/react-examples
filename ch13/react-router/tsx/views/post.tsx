import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type DataType = typeof import('../../posts.json');

interface MatchParams {
  id: string;
}

interface PostProps extends RouteComponentProps<MatchParams> {
  posts: DataType;
}

const Post: React.FC<PostProps> = (props) => {
  let post = props.posts.find(element => element.slug === props.match.params.id)!;
  return (
    <div>
      <h3>{post.title || 'Not found'}</h3>
      <p>{post.text || 'No text'}</p>
      <p>
        <a href={post.link} target="_blank">Continue reading...</a>
      </p>
    </div>
  )
};

export default withRouter(Post);