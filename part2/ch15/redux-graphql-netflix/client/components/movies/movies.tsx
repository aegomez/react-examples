import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, Route } from 'react-router-dom';
import { RootState } from 'typesafe-actions';
import axios from 'axios';
import clean from 'clean-tagged-string';

import Movie from '../movie/movie';
import { fetchMoviesAC as fetchMovies } from '../../modules/actions';
import styles from './movies.css';

interface MatchParams {
  id: string;
}
interface OwnProps extends RouteComponentProps<MatchParams> { }

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.all
});

const dispatchProps = {
  fetchMovies
};

type Props = ReturnType<typeof mapStateToProps>
  & typeof dispatchProps
  & OwnProps;

class Movies extends React.Component<Props> {
  componentDidMount() {
    const query = clean`{
      movies {
        title,
        cover
      }
    }`;

    axios.get(`/q?query=${query}`)
      .then(response => this.props.fetchMovies(response))
      .catch(e => console.error('Could not fetch data', e));
  }

  render() {
    const {
      // children,
      movies = [],
      match: {
        params
      }
    } = this.props;

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`} >
              <div className={styles.movie}
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </div>
        <Route path='/movies/:id' component={Movie} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps
)(Movies);