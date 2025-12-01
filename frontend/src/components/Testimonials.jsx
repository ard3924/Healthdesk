import testobites from "../assets/testbiteproduct.png";
import vitarenew from "../assets/viterenew.png";
import nervefreedom from "../assets/nervefreedom.png";
import stars from "../assets/starsicon.png"; 
import logo from "../assets/Logo.png";               // YOUR LOGO
import socialicons from "../assets/socialmediaicons.png"; // SINGLE IMAGE OF ICONS

const testimonials = [
  {
    product: "TestoBites",
    review:
      "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    name: "Ryan R.",
    image: testobites,
  },
  {
    product: "Vita Renew",
    review:
      "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    name: "Jamie Fields",
    image: vitarenew,
  },
  {
    product: "Nerve Freedom",
    review:
      "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
    name: "Anonymous",
    image: nervefreedom,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* MAIN TITLE */}
        <h2 className="text-4xl font-bold text-gray-900">
          Verified Customer Testimonials
        </h2>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-[#EAF6FF] rounded-2xl px-6 py-10 text-left"
            >
              {/* FLOATING PRODUCT IMAGE */}
              <img
                src={t.image}
                alt={t.product}
                className="absolute -top-10 left-6 w-20 drop-shadow-md"
              />

              <h3 className="text-xl font-semibold text-gray-900 mt-8">{t.product}</h3>
              <img src={stars} alt="stars" className="h-4 mt-2" />

              <p className="text-gray-700 text-sm leading-relaxed mt-4">
                {t.review}
              </p>

              <p className="text-gray-900 font-medium text-sm mt-4">- {t.name}</p>
            </div>
          ))}
        </div>

        {/* LOGO AND SOCIAL BLOCK */}
        <div className="mt-20">
          {/* LOGO */}
          <img src={logo} alt="Brand Logo" className="mx-auto h-40" />

          {/* FOLLOW BUTTON */}
          <button className="mt-6 border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition">
            Follow Us
          </button>

          {/* SOCIAL ICONS */}
          <img
            src={socialicons}
            alt="social icons"
            className="mx-auto mt-6 h-10 object-contain"
          />
        </div>

      </div>
    </section>
  );
}
