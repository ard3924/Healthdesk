import dentpure from '../assets/dentpure.png';
import truefem from '../assets/truefem.png';
import viterenew from '../assets/viterenew.png';
import prostazen from '../assets/prostazen.png';
import nervefreedom from '../assets/nervefreedom.png';
import stars from '../assets/starsicon.png'; 

const products = [
  { name: "Dent Pure", image: dentpure },
  { name: "True Fem", image: truefem },
  { name: "Vita Renew", image: viterenew },
  { name: "ProstaZen", image: prostazen },
  { name: "Nerve Freedom", image: nervefreedom },
];

export default function BestSellers() {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-left">

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900">Our Best Sellers</h2>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mt-3 max-w-3xl whitespace-nowrap">
          Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
        </p>

        {/* TAGS (Inline Divider Style) */}
        <div className="flex items-center justify-start gap-6 text-gray-900 font-semibold text-sm mt-8">
          <span>Results-Driven</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span>All-Natural</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span>Non-GMO</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span>Cruelty-Free</span>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 mt-16">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* PRODUCT IMAGE CONTAINER */}
              <div className="bg-[#F6F8FF] rounded-2xl p-6 w-full h-64">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{p.name}</h3>

              {/* Stars PNG */}
              <img src={stars} alt="rating" className="h-5 mt-2" />

              {/* Outlined Button */}
              <button className="mt-4 border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
