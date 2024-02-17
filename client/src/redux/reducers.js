const initialState = {
  dogs: [],
  temperament: [],
  eigthDogs: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "RAZAS":
        return {
       ...state,
          eigthDogs: action.payload
        };
        
    case "SEARCH_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };

      case "ORDENAR_LIVIANO_PESADO":
        return {
          ...state,
          dogs: state.dogs.sort(
            (a, b) =>
              parseInt(a.weight.imperial.slice(0, 3)) -
              parseInt(b.weight.imperial.slice(0, 3))
          ),
        };
      case "ORDENAR_PESADO_LIVIANO":
        return {
          ...state,
          dogs: state.dogs.sort(
            (a, b) =>
              parseInt(b.weight.imperial.slice(0, 3)) -
              parseInt(a.weight.imperial.slice(0, 3))
          ),
        };
  
      case "ORDENAR_BAJO_ALTO":
        return {
          ...state,
          dogs: state.dogs.sort(
            (a, b) =>
              parseInt(a.height.imperial.slice(0, 3)) -
              parseInt(b.height.imperial.slice(0, 3))
          ),
        };
      case "ORDENAR_ALTO_BAJO":
        return {
          ...state,
          dogs: state.dogs.sort(
            (a, b) =>
              parseInt(b.height.imperial.slice(0, 3)) -
              parseInt(a.height.imperial.slice(0, 3))
          ),
        };

      case "ORDENAR_ASC_DESC":
      return {
        ...state,
        dogs: state.dogs.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
      };

    case "ORDENAR_DESC_ASC":
      return {
        ...state,
        dogs: state.dogs.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }),
      };

    case "TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "ORDENAR_TEMPERAMENT_ASC_DESC":
      return {
        ...state,
        dogs: state.temperament.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
      };

    case "ORDENAR_TEMPERAMENT_DESC_ASC":
      return {
        ...state,
        dogs: state.temperament.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }),
      };

   

    
    default:
      return state;
  }
}

export default rootReducer;
