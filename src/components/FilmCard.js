import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';
import moment    from 'moment';

const Header = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: serif;
  margin: 0;
`;

const Field = styled.div`
  font-size: 1rem;
  font-family: serif;
`;

class FilmCard extends React.PureComponent {
  static propTypes = {
    movie: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        leadActor: PropTypes.string.isRequired,
        subGenre: PropTypes.string.isRequired,
        producer: PropTypes.string.isRequired,
      }
    ).isRequired,
  };

  render() {
    const {
      movie: {
        name,
        releaseDate,
        leadActor,
        subGenre,
        producer,
      }
    } = this.props;

    return (
      <section>
        <Header>{name}</Header>

        <Field>Release Date: {moment(releaseDate).format('L')}</Field>

        <Field>Lead Actor: {leadActor}</Field>

        <Field>Sub-Genre: {subGenre}</Field>

        <Field>Producer: {producer}</Field>
      </section>
    );
  }
}

export default FilmCard;
