import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/reducers/countReducer";
import { useEffect } from "react";
import { getUserList } from "./store/reducers/userReducer";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const { listData } = useSelector((store) => store.user);

  console.log("listData:", listData);

  const incrementHandler = () => {
    const payload = { value: 1 };
    dispatch(increment(payload));
  };

  const decrementHandler = () => {
    const payload = { value: 1 };
    dispatch(decrement(payload));
  };

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Redux {count.value}</h2>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
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

      <div>
        {listData &&
          listData.map((item, index) => (
            <div
              key={index}
              style={{
                width: "50%",
                margin: "8px auto",
                padding: "20px",
                border: "1px solid blueviolet",
                borderRadius: "8px",
              }}
            >
              <h2>Name: {`${item?.first_name} ${item?.last_name}`} </h2>
              <h4>Email: {`${item?.email}`}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
