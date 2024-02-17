const { createStore } = require("redux");

const initialState = {
  count: 0,
  users: [],
  friend: {},
  darkMode: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUMENTAR_CONTADOR":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
};

const store = createStore(reducer);

store.getState()
console.log(store.getState());

store.dispatch({ type: "AUMENTAR_CONTADOR" });
store.dispatch({ type: "AUMENTAR_CONTADOR" });
store.dispatch({ type: "AUMENTAR_CONTADOR" });
store.dispatch({ type: "AUMENTAR_CONTADOR" });
store.dispatch({ type: "AUMENTAR_CONTADOR" });
store.dispatch({ type: "AUMENTAR_CONTADOR" });

console.log(store.getState());


