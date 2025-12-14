function Hero() {
  try {
    return (
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[var(--primary-color)] bg-opacity-10 rounded-full mb-6">
                <span className="text-[var(--primary-color)] font-semibold">🍝 Authentic Italian Cuisine</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Experience the <span className="text-[var(--primary-color)]">True Taste</span> of Italy
              </h1>
              <p className="text-xl text-[var(--text-light)] mb-8">
                Fresh ingredients, traditional recipes, and warm hospitality. Join us for an unforgettable dining experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                  View Menu
                </button>
                <a href="tel:+1234567890" className="px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
                  Call Now
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="icon-clock text-xl text-[var(--primary-color)]"></div>
                  <span className="text-[var(--text-light)]">Mon-Sun: 11AM-10PM</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" alt="Restaurant interior" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                    <div className="icon-star text-2xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--text-dark)]">4.9/5</div>
                    <div className="text-[var(--text-light)]">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
