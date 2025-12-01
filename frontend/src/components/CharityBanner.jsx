import charitableamericantettinus from '../assets/charitableamericantettinus.png';
import charitableprostrstecancer from '../assets/charitableprostrstecancer.png';
import diabotesfoundation from '../assets/diabotesfoundation.png';
import usheart from '../assets/usheart.png';
import bgourcharitable from '../assets/bgourcharitable.jpg';

export default function CharityBanner() {
  return (
    <section
      className="py-16 text-center"
      style={{ backgroundImage: `url(${bgourcharitable})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Charitable Initiatives
        </h2>

        <p className="text-white text-base md:text-lg max-w-2xl mx-auto mt-2 leading-relaxed">
          Health Care Desk Gives Back
        </p>

        {/* DESCRIPTION */}
        <p className="text-white mt-4 mx-auto leading-relaxed">
          At Health Care Desk, a portion of our profits is committed to
          supporting charities and global health research initiatives.
        </p>

        {/* LOGOS ROW */}
        <div className="mt-12 grid grid-cols-4 gap-16 items-center">
          <img src={charitableamericantettinus} alt="charity" className="h-16 object-contain" />
          <img src={charitableprostrstecancer} alt="charity" className="h-16 object-contain" />
          <img src={diabotesfoundation} alt="charity" className="h-16 object-contain" />
          <img src={usheart} alt="charity" className="h-16 object-contain" />
        </div>

      </div>
    </section>
  );
}
