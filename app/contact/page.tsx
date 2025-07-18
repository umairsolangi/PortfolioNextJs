import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <div className="bg-gray-100 w-full">
        <Navbar />
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p>Email: umair@example.com</p>
        <p>LinkedIn: <a className="text-blue-500" href="https://linkedin.com/in/umairsolangi">linkedin.com/in/umair</a></p>
        <p>GitHub: <a className="text-blue-500" href="https://github.com/umairsolangi">github.com/umairsolangi</a></p>
      </main>
      <div className="bg-gray-900 text-white w-full">
        <Footer />
      </div>
    </>
  );
}
