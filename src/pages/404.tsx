'use-client'
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0A0F1E] via-[#1B1A55] to-[#070F2B] text-white">
      <div className="max-w-xl text-center space-y-8">
        {/* Big Glowing 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,115,0,0.6)]">
          404
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl font-semibold text-gray-200">
          Lost in the decentralized universe... 🌌
        </p>

        <p className="text-md md:text-lg text-gray-400">
          Don’t worry, even the best explorers sometimes miss a block.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold shadow-lg hover:shadow-[0_0_25px_rgba(255,115,0,0.6)] hover:scale-105 transition-all duration-300"
        >
          🚀 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
