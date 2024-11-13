import { useState } from "react";
import PageTitle from "@/components/page-title";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen relative pb-12 pt-6">
      <PageTitle text="Messages" />

      <section className="p-4 bg-white mx-auto">
        <h4 className="text-lg font-medium text-center mb-4">Count: {count}</h4>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn-primary rounded-md py-2 px-4"
        >
          Click me to count
        </button>
      </section>
    </main>
  );
}
