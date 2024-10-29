import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen pb-40 grid place-content-center">
      <div className="p-4 bg-white mx-auto">
        <h4 className="text-lg font-medium text-center mb-4">Count: {count}</h4>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn-primary rounded-md py-2 px-4"
        >
          Click me to count
        </button>
      </div>
    </div>
  );
}
