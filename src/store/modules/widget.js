const initialState = {
  actor: 'Dalton Keck',
  movies: [
    {
      id: 1,
      name: 'Earth Trailers',
      releaseDate: '2018-03-18T00:00:00.000Z',
      leadActor: 'Dalton Keck',
      subGenre: 'Zombies',
      producer: 'Tim Cook',
      iconColor: '#00f',
    },
    {
      id: 3,
      name: 'Fly Again II',
      releaseDate: '1989-03-18T00:00:00.000Z',
      leadActor: 'Dalton Keck',
      subGenre: 'Insectoid',
      producer: 'Tim Cook',
      iconColor: '#f00',
    },
    {
      id: 2,
      name: 'Magma Eaters',
      releaseDate: '2018-03-18T00:00:00.000Z',
      leadActor: 'Dalton Keck',
      subGenre: 'Nature',
      producer: 'Burt Reynolds',
      iconColor: '#0f0',
    },
  ],
};

function widget(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default widget;
