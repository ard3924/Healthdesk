import frame from '../assets/frame.jpg';
import reasearchside from '../assets/reasearchside img.jpg';
import ecoconsiousside from '../assets/ecoconsiousside img.jpg';

export default function SmartHealth() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Main Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Health Care Desk
          <br />
          The Future Of Smart Health
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mt-4 leading-relaxed text-sm md:text-base">
          At Health Care Desk, we are committed to producing supplements that harness the power of all-natural
          superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
        </p>

        {/* BLOCK 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
          <img
            src={frame}
            alt="Natural Components"
            className="rounded-xl w-full"
          />

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              100% Natural Components
            </h3>
            <p className="text-gray-700 font-medium mt-1">
              Nature-Powered Wellness You Can Trust
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We harness the goodness of nature to create supplements enriched with premium, research-backed superfood
              extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits.
              At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance,
              ensuring every product you choose is both effective and trustworthy.
            </p>

            <button className="mt-6 border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* BLOCK 2 (reversed layout) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-20">

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Research-Backed Formulations
            </h3>
            <p className="text-gray-700 font-medium mt-1">
              Formulated with Clinically Tested Ingredients
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We combine the expertise of our physicians with the latest health data and medical research, ensuring
              every supplement is thoughtfully formulated for maximum benefit.
            </p>

            <button className="mt-6 border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>

          <img
            src={reasearchside}
            alt="Research Backed"
            className="rounded-xl w-full"
          />
        </div>

        {/* BLOCK 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
          <img
            src={ecoconsiousside}
            alt="Eco Manufacturing"
            className="rounded-xl w-full"
          />

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Eco-Conscious Manufacturing
            </h3>
            <p className="text-gray-700 font-medium mt-1">
              Sustainable from Source to Shelf
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our supplements are crafted in certified facilities that reduce waste and environmental impact through
              eco-friendly processes. We are committed to providing products that are as good for the planet as they are
              for you.
            </p>

            <button className="mt-6 border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
