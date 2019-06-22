export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands.map(band => {return {...band}}), {...action.band}] };
    default:
      return state;
  }
};
