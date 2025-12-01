import doctor from "../assets/mainavatar.png";

export default function Hero() {
  return (
    <section className="bg-white pt-4 pb-12"> {/* reduced top padding */}
      <div className="max-w-7xl mx-auto px-4">

           <div className="bg-[#F7F9FC] rounded-2xl px-8 md:px-16 py-14 grid md:grid-cols-2 items-center gap-10">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Health Desk Clinic:
              <br />
              All Natural Supplements
            </h1>

            <p className="text-gray-700 mt-6 max-w-lg leading-relaxed">
              Health Care Desk is the premier choice for those seeking wellness through wholesome,
              superfood-enriched formulas that actually work. Our all-natural, organic health supplements
              are designed to give your body what it needs to thrive and optimize your health each day!
            </p>

            <button className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={doctor}
              alt="Doctor"
              className="w-[340px] md:w-[420px] object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
