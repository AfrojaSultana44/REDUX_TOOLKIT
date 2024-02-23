import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/reducers/countReducer";


function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const payload = {value: 1};
    dispatch(increment(payload))

  };

  const decrementHandler = () => {
    const payload = {value: 1};
    dispatch(decrement(payload))
  };
  return (
    <div>
      <h2 style={{textAlign: "center"}}>React Redux {count.value}</h2>
      <div style={{textAlign: "center", marginTop: "20px"}}>
        <button
          onClick={incrementHandler}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Increment
        </button>
      </div>
      <div style={{textAlign: "center", marginTop:"20px"}}>
        <button
          onClick={decrementHandler}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
