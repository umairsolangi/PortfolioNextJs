import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
     
      <div className="bg-gray-100 w-full">
        <Navbar />
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
        <h1 className="text-4xl font-bold mt-10">Hi, I&apos;m Umair - a frontend developer.</h1>
        <p className="mt-4 text-lg">I build fast and responsive websites using React & Next.js</p>
        <Link href="/projects">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            View Projects
          </button>
        </Link>
      </main>

      <div className="bg-gray-900 text-white w-full">
        <Footer />
      </div>
    </>
  );
}
