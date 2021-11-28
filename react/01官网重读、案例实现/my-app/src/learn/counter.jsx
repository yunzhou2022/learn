export default function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        minus
      </button>
    </div>
  );
}

function init(initialCount) {
  return {
    count: initialCount,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "minus":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
