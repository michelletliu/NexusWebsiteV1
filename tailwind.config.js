// app/page.tsx or pages/index.tsx
export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Welcome to Next.js with Tailwind
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-600">Description here</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-600">Description here</p>
          </div>
        </div>
      </main>
    )
  }