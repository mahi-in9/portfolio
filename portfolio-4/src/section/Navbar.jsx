import FuturisticNavbar from "../components/Canvas/FuturisticNavbar";

export default function Navbar() {
  return (
    <header className="relative w-full z-50 h-6">
      {/* 3D Background */}
      <div className="absolute top-0 left-0 w-full h-32">
        <FuturisticNavbar />
      </div>

      {/* Actual Navbar */}
      <div className="relative flex justify-between items-center px-6 py-6 z-10">
        <h1 className="text-white text-2xl font-bold relative z-10">
          MyPortfolio
        </h1>
        {/* Add Links / Menu here */}
      </div>
    </header>
  );
}
