import logo from "../assets/Logo.png";
import cards from "../assets/creditcard.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC]">

      {/* 1️⃣ TOP INFO BAR */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-16 text-center text-gray-800">

        <div>
          <h3 className="text-xl font-semibold">Have a Question?</h3>
          <p className="text-sm mt-2 max-w-xs mx-auto">
            Check out our FAQs where we answer the most commonly asked questions
          </p>
          <button className="mt-4 border border-blue-600 text-blue-600 px-5 py-2 rounded-md text-sm hover:bg-blue-600 hover:text-white transition">
            Read FAQs
          </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <p className="text-sm mt-2">Enjoy free shipping for all orders.</p>
          <p className="font-bold text-lg mt-3">1-800-822-7777</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">We're Social</h3>
          <p className="text-sm mt-2">Like us, love us, follow us!</p>
        </div>

      </div>

<div className="bg-[#0D67C2] py-16">  
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row 
                  items-center justify-between gap-8 px-6">

    {/* LEFT SIDE TEXT */}
    <div className="text-white">
      <h3 className="text-4xl md:text-3xl font-bold">Let's Grow Together</h3> 
      <p className="text-lg opacity-90 mt-2">
        We'll keep it simple. Only the news and updates you need.
      </p>
    </div>

    {/* RIGHT: EMAIL INPUT + BUTTON */}
    <div className="flex border border-white rounded-md overflow-hidden">
      <input
        type="email"
        placeholder="Please Enter Your Email"
        className="bg-[#0D67C2] text-white placeholder-white 
                   px-5 py-4 md:w-96 text-sm outline-none"
      />
      <button className="bg-white text-black font-semibold px-8 py-4 text-sm">
        Submit
      </button>
    </div>

  </div>
</div>


      {/* 3️⃣ MAIN FOOTER SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12">

        {/* LEFT COLUMN */}
        <div>
          <img src={logo} alt="logo" className="h-30 mb-6" />
          <p className="text-sm leading-relaxed text-gray-700">
            Address: 7823 Red Oak Trail, Austin, TX, 78745, United States <br />
            Phone: (512) 555-2376 <br />
            Email: Ereforce@outlook.com
          </p>
        </div>

        {/* RIGHT COLUMN — PRODUCT LIST (TEXT BASED) */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-4">Our Products</h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 text-sm text-gray-700">

            <ul className="space-y-1">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Uro Flow</li>
            </ul>

            <ul className="space-y-1">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Memof</li>
            </ul>

            <ul className="space-y-1">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>Derma Care</li>
            </ul>

            <ul className="space-y-1">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>TestoZen</li>
            </ul>

            <ul className="space-y-1">
              <li>Vita Renew</li>
              <li>Testobites</li>
              <li>Audizen</li>
              <li>Nerve Flow</li>
              <li>True Fem</li>
            </ul>

          </div>
        </div>

      </div>

      {/* DISCLAIMER */}
      <p className="text-[11px] text-center text-gray-500 max-w-5xl mx-auto px-4">
        These statements have not been evaluated by the Food and Drug Administration.
        These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
      </p>

      {/* PAYMENT ICONS */}
      <div className="flex justify-center mt-4">
        <img src={cards} alt="payment icons" className="h-7" />
      </div>

      {/* COPYRIGHT + LINKS */}
      <div className="text-center text-gray-600 text-sm py-6 border-t mt-6">
        © 2025, Health Desk Clinic. All Rights Reserved.

        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-blue-600">Terms And Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </div>
      </div>

    </footer>
  );
}
