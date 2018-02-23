import React       from 'react';
import { connect } from 'react-redux';
import PropTypes   from 'prop-types';
import styled      from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import FilmCard from '../components/FilmCard';
import Icon from '../components/Icon';

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
      ).isRequired,
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
            iconStyle={{ background: '#ccc', height: '15px', width: '15px', right: '12px' }}
            position={position}
          >
            Today
          </VerticalTimelineElement>

          {
            movies
              .sort((a, b) => (new Date(b.releaseDate) - new Date(a.releaseDate)))
              .map(movie => (
                <VerticalTimelineElement
                  key={movie.id}
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: movie.iconColor }}
                  position={position}
                  icon={<Icon subGenre={movie.subGenre} />}
                >
                  <FilmCard
                    movie={movie}
                  />
                </VerticalTimelineElement>
              ))
          }

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#ccc', height: '15px', width: '15px', right: '12px' }}
            position={position}
          >
            12/01/12
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
