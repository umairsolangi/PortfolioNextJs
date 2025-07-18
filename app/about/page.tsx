import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <div className="bg-gray-100 w-full">
              <Navbar />
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I'm a CS student currently learning React.js and Next.js. I'm passionate about frontend development and building clean UIs.</p>
        <h3 className="text-xl font-semibold mt-4">Technologies I use:</h3>
        <ul className="list-disc ml-6">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </main>
       <div className="bg-gray-900 text-white w-full">
              <Footer />
      </div>
    </>
  );
}
