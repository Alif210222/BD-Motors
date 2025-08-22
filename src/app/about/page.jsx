import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image */}
        <div>
          <img
            src="https://i.ibb.co/T2cpBd5/888.jpg"
            alt="Car Service Garage"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right side: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-red-500">BD Motors</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At <strong>BD Motors</strong>, we are passionate about keeping your
            vehicle in top condition. From routine maintenance to advanced
            repairs, our skilled team ensures your car receives the highest
            quality service every time.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We combine years of experience with modern tools and technology to
            deliver reliable, affordable, and efficient auto care. Whether it’s
            a quick oil change, engine diagnostics, or full-body service, we’ve
            got you covered.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>✅ Certified and experienced mechanics</li>
            <li>✅ Affordable & transparent pricing</li>
            <li>✅ Genuine spare parts & top-quality products</li>
            <li>✅ 24/7 Customer support and emergency service</li>
          </ul>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
