import React from 'react';

const TestimonialCard = ({ text, name, role, avatar }) => {
  return (
    <div className="backdrop-blur-md bg-white/50 border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300">
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        “{text}”
      </p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialData = [
    {
      text: "SoftSell helped us recover value from unused licenses effortlessly. The entire process took less than a week!",
      name: 'Emily Tran',
      role: 'IT Manager, Nexora Inc.',
      avatar: 'https://pagedone.io/asset/uploads/1696229969.png',
    },
    {
      text: "We offloaded dozens of surplus licenses with SoftSell. Transparent, fast, and totally hassle-free.",
      name: 'Marcus Lee',
      role: 'Procurement Head, TechHive Corp.',
      avatar: 'https://pagedone.io/asset/uploads/1696229994.png',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            See how businesses are reclaiming value through our simple license resale process.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
