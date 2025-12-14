function Testimonials() {
  try {
    const testimonials = [
      { name: 'Sarah Johnson', rating: 5, text: 'Absolutely amazing! The pasta carbonara was perfection. Best Italian food outside of Italy!', image: 'photo-1438761681033-6461ffad8d80' },
      { name: 'Michael Chen', rating: 5, text: 'The atmosphere is wonderful and the service is impeccable. Our new favorite restaurant!', image: 'photo-1472099645785-5658abf4ff4e' },
      { name: 'Emily Rodriguez', rating: 5, text: 'Every dish we tried was incredible. The tiramisu is to die for. Highly recommend!', image: 'photo-1544005313-94ddf0286df2' }
    ];

    return (
      <section id="testimonials" className="py-20 bg-[var(--secondary-color)]" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="icon-star text-xl text-yellow-400"></div>
                  ))}
                </div>
                <p className="text-[var(--text-light)] mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img src={`https://images.unsplash.com/${testimonial.image}?w=100&q=80`} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-light)]">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}
