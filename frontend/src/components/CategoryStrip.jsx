import weightlossicon from '../assets/weightlossicon.png';
import nerveicon from '../assets/nerveicon.png';
import skincareicon from '../assets/skincareicon.png';
import menhealthicon from '../assets/menhealthicon.png';
import womenhealth from '../assets/womenhealth.png';
import dentalicon from '../assets/dentalicon.png';
import memoryicon from '../assets/memoryicon.png';

const categories = [
  {
    title: "Weight Loss",
    desc: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you",
    icon: weightlossicon,
  },
  {
    title: "Nerve Pain",
    desc: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function",
    icon: nerveicon,
  },
  {
    title: "Skin Care",
    desc: "Explore premium skincare products that nourish, protect, and enhance your natural glow",
    icon: skincareicon,
  },
  {
    title: "Men’s Health",
    desc: "Discover men’s health products designed to boost energy, strength, and overall well-being.",
    icon: menhealthicon,
  },
  {
    title: "Women’s Health",
    desc: "Explore women’s health products that support hormonal balance, vitality, and overall wellness",
    icon: womenhealth,
  },
  {
    title: "Dental",
    desc: "Shop dental care products that keep your smile bright, healthy, and confident",
    icon: dentalicon,
  },
  {
    title: "Memory",
    desc: "Discover memory support products that help enhance focus, clarity, and cognitive performance",
    icon: memoryicon,
  },
];

// duplicate for seamless infinite scroll
const longList = [...categories, ...categories, ...categories];

export default function CategoryStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Nutrition Solutions for Your Complete Well-Being
        </h2>
      </div>

      {/* horizontal auto-scrolling strip */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 animate-scroll"
          style={{ animationDuration: "28s" }} 
        >
          {longList.map((c, i) => (
            <article
              key={i}
              className="min-w-[320px] max-w-[320px] bg-[#E9F5FF] rounded-3xl shadow-lg px-7 py-6 flex flex-col justify-between text-left"
            >
                          {/* icon circle */}
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mb-6">
                <img src={c.icon} alt={c.title} className="w-8 h-8" />
              </div>

              {/* text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-[#5C7A99] leading-relaxed mb-6">
                  {c.desc}
                </p>
              </div>

              {/* gradient button */}
              <button className="w-full bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 rounded-full text-sm font-semibold mt-auto hover:brightness-105 transition">
                Buy now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
