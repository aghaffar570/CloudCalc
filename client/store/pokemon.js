import axios from 'axios';

// action types
const GET_POKEMON = 'GET_POKEMON';

// action creator
export function getPokemon (pokemonList) {
  const action = { type: GET_POKEMON, pokemonList };
  return action;
};

// thunk creator
export function fetchPokemon () {
  return function thunk (dispatch) {
    return axios.get('/api/pokemon')
      .then(res => res.data)
      .then(pokemonList => {
        const action = getPokemon(pokemonList);
        dispatch(action);
      });
  };
};

// reducer
export default function pokemonReducer (state = [], action) {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemonList;
    default:
      return state;
  };
};
