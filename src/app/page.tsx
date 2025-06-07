import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center min-h-screen">
        {/* Your content goes here */}
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <p className="text-gray-600">Start building your app here.</p>
      </main>
    </div>
  );
}