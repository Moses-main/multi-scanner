import Navigation from "../components/Navigation";

// Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className=" mb-40">
        <Navigation />
      </div>

      <div className="flex flex-col items-center justify-center  bg-gradient-to-br from-navy-900 to-purple-900 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Web3 Platform
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Your gateway to decentralized technology. Explore the future of the
          internet with us.
        </p>
      </div>
    </div>
  );
}
export default LandingPage;
