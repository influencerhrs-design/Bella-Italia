function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Absolutely amazing! Best Italian food outside Italy."
    },
    {
      name: "Michael Chen",
      text: "Wonderful atmosphere and excellent service."
    },
    {
      name: "Emily Rodriguez",
      text: "Incredible dishes and the tiramisu is perfect!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <div className="text-yellow-400 text-xl mb-2">
                ★★★★★
              </div>
              <p className="text-gray-600 italic mb-4">
                "{r.text}"
              </p>
              <h4 className="font-bold">{r.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
