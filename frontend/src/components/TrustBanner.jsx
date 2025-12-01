import allnatural from '../assets/allnatural.png';
import crueltyfree from '../assets/crueltyfree.png';
import moneybackgurantee from '../assets/moneybackgurantee.png';
import giviingback from '../assets/giviingback.png';
import nongmo from '../assets/nongmo.png';
import trustbannerbg from '../assets/trustbannerbg.jpg';

export default function TrustBanner() {
  return (
    <section className="py-16" style={{ backgroundImage: `url(${trustbannerbg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A Brand That You Can Trust
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg mt-2">
          Our results-driven supplements are made with premium & safe ingredients
        </p>

        {/* Icons Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 items-center justify-center gap-8">

          {/* All Natural */}
          <div className="flex flex-col items-center">
            <img src={allnatural} alt="natural" className="w-10 h-10 mb-2" />
            <span className="text-blue-600 font-medium text-sm">All Natural</span>
          </div>

          {/* Cruelty-Free */}
          <div className="flex flex-col items-center">
            <img src={crueltyfree} alt="cruelty-free" className="w-10 h-10 mb-2" />
            <span className="text-blue-600 font-medium text-sm">Cruelty-Free</span>
          </div>

          {/* Money-back */}
          <div className="flex flex-col items-center">
            <img src={moneybackgurantee} alt="money-back" className="w-10 h-10 mb-2" />
            <span className="text-blue-600 font-medium text-sm">Money-back<br/>Guarantee</span>
          </div>

          {/* Giving Back */}
          <div className="flex flex-col items-center">
            <img src={giviingback} alt="giving-back" className="w-10 h-10 mb-2" />
            <span className="text-blue-600 font-medium text-sm">Giving back</span>
          </div>

          {/* Non-GMO */}
          <div className="flex flex-col items-center">
            <img src={nongmo} alt="non-gmo" className="w-10 h-10 mb-2" />
            <span className="text-blue-600 font-medium text-sm">Non-GMO</span>
          </div>

        </div>

      </div>
    </section>
  );
}
