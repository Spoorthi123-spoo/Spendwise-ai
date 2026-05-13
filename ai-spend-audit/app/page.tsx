export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl md:text-7xl font-bold">
          SpendWise AI
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Instantly audit your AI subscriptions and discover
          hidden savings across ChatGPT, Claude, Cursor,
          Copilot, Gemini, and more.
        </p>

        <div className="mt-10 flex gap-4">

          <a
            href="/audit"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
          >
            Start Free Audit
          </a>

          <a
            href="#features"
            className="border border-gray-600 px-8 py-4 rounded-2xl hover:bg-gray-900 transition"
          >
            Learn More
          </a>

        </div>

      </section>

      {/* Features Section */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-6 px-10 pb-24"
      >

        <div className="bg-gray-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            AI Spend Analysis
          </h2>

          <p className="mt-4 text-gray-400">
            Analyze your current AI subscriptions and identify
            unnecessary expenses instantly.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Smart Recommendations
          </h2>

          <p className="mt-4 text-gray-400">
            Get cheaper alternatives and optimized plans based
            on your actual usage and team size.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Annual Savings
          </h2>

          <p className="mt-4 text-gray-400">
            See how much your startup could save monthly and
            yearly with actionable recommendations.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 SpendWise AI — AI Cost Optimization Platform
      </footer>

    </main>
  );
}