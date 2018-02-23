import React       from 'react';
import { connect } from 'react-redux';
import PropTypes   from 'prop-types';
import styled      from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import FilmCard from '../components/FilmCard';

import 'react-vertical-timeline-component/style.min.css';
import './Widget.css';

const StyledDiv = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  right: 0;

  height: 100%;
  width: 30%;
  
  padding: 1.5rem;

  overflow-x: auto;
  background-color: #fff;
`;

function UmbrellaIcon() {
  return (
    <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
      <title id="title">Umbrella Icon</title>
      <path d="M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z"/>
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg className="jss1" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  );
}

class Widget extends React.PureComponent {
  static propTypes = {
    position: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,

    movies: PropTypes.arrayOf(
      PropTypes.shape(
        {
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          releaseDate: PropTypes.string.isRequired,
          leadActor: PropTypes.string.isRequired,
          subGenre: PropTypes.string.isRequired,
          producer: PropTypes.string.isRequired,
        }
      ).isRequired
    ).isRequired,
  };

  render() {
    const {
      movies,
      position,
    } = this.props;

    return (
      <StyledDiv>
        <VerticalTimeline className="custom-vertical-timeline-component"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#eee' }}
            position={position}
          >
            today
          </VerticalTimelineElement>

          {
            movies
              .sort((a, b) => (new Date(b.releaseDate) - new Date(a.releaseDate)))
              .map(movie => (
                <VerticalTimelineElement
                  key={movie.id}
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: movie.iconColor, color: '#fff' }}
                  position={position}
                  icon={movie.id % 2 ? <UmbrellaIcon /> : <SchoolIcon />}
                >
                  <FilmCard
                    movie={movie}
                  />
                </VerticalTimelineElement>
              ))
          }

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#eee' }}
            position={position}
          >
            12/12/12
          </VerticalTimelineElement>
        </VerticalTimeline>
      </StyledDiv>
    );
  }
}

function mapStateToProps({ widget }) {
  const { actor, movies } = widget;

  return {
    actor,
    movies,
  };
}

export default connect(mapStateToProps)(Widget);
