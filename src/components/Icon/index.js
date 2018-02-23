import React     from 'react';
import PropTypes from 'prop-types';

import subGenreIcons from './subGenreIcons.json';

class Icon extends React.PureComponent {
  static propTypes = {
    subGenre: PropTypes.string.isRequired,
  };

  render() {
    const { subGenre } = this.props;

    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path d={subGenreIcons[subGenre]} />
      </svg>
    );
  }
}

export default Icon;
