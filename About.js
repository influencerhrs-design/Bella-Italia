function About() {
  try {
    const features = [
      { icon: 'chef-hat', title: 'Expert Chefs', desc: 'Trained in traditional Italian cooking methods' },
      { icon: 'leaf', title: 'Fresh Ingredients', desc: 'Locally sourced, organic produce daily' },
      { icon: 'heart', title: 'Family Recipes', desc: 'Passed down through generations' },
      { icon: 'award', title: 'Award Winning', desc: 'Recognized for culinary excellence' }
    ];

    return (
      <section id="about" className="py-20 bg-white" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">About Bella Italia</h2>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              Since 1985, we've been bringing authentic Italian flavors to our community. Our passion for quality food and exceptional service has made us a beloved dining destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[var(--text-light)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
