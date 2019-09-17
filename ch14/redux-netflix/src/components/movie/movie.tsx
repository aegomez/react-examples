import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { RootState } from 'typesafe-actions';

import { fetchMovieAC as fetchMovie } from '../../modules/actions';
import styles from './movie.css';

interface MatchParams {
  id: string;
}
interface OwnProps extends RouteComponentProps<MatchParams> { }

const mapStateToProps = (state: RootState) => ({
  movie: state.movies.current
});

const dispatchProps = {
  fetchMovie
};

type Props = ReturnType<typeof mapStateToProps>
  & typeof dispatchProps
  & OwnProps;

class Movie extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchMovie(+this.props.match.params.id);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchMovie(+this.props.match.params.id);
    }
  }

  render() {
    console.log(this.props)
    const { movie } = this.props;
    const starring = movie.starring || [];

    return (
      <div
        className={styles.movie}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`
        }}>
        <div
          className={styles.cover}
          style={{
            backgroundImage: `url(${movie.cover})`
          }} />
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {starring.map((actor, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link to="/movies"
          className={styles.closeButton}>
          [X]
        </Link>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps
)(Movie);