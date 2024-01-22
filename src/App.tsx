import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="container my-12 mx-auto p-10">
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="py-4 px-6 text-center border border-green-600 rounded bg-green-500 text-slate-100 shadow-sm font-bold text-2xl"
        >
          Increment
        </button>
        <input
          className="py-4 px-6 text-center  border border-green-600 rounded text-green-700 max-w-sm shadow-sm font-bold text-3xl"
          type="number"
          value={count}
          disabled
        />
        <button
          onClick={() => dispatch(decrement())}
          className="py-4 px-6 text-center  border border-red-600 rounded bg-red-500 text-slate-100 shadow-sm font-bold text-2xl"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
