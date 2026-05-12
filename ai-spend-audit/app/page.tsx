export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      <h1 className="text-6xl font-bold">
        SpendWise AI
      </h1>

      <p className="mt-4 text-gray-400 text-xl">
        Stop Overspending on AI Tools
      </p>

      <a
        href="/audit"
        className="mt-8 bg-white text-black px-6 py-3 rounded-xl"
      >
        Start Free Audit
      </a>

    </main>
  );
}