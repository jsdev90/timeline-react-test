import React from 'react';
import styled from 'styled-components';

import Widget from './containers/Widget';

const Main = styled.main`
  position: relative;

  height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Main>
        <Widget position="right" />
      </Main>
    );
  }
}

export default App;
