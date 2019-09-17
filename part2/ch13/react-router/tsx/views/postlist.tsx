import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

type DataType = typeof import('../../posts.json');

interface PostListProps extends RouteComponentProps {
  posts: DataType;
}

const PostList: React.FC<PostListProps> = (props) =>(
  <div>
    Posts
    <ol>
      {props.posts.map(elem => 
        <li key={elem.slug}>
          <Link to={`/posts/${elem.slug}`}>
            {elem.title}
          </Link>
        </li>
      )}
    </ol>
  </div>
);

export default withRouter(PostList);