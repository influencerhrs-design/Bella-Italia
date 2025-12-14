function Menu() {
  try {
    const menuItems = [
      { name: 'Margherita Pizza', price: '$16.99', desc: 'Fresh mozzarella, basil, tomato sauce', image: 'photo-1574071318508-1cdbab80d002' },
      { name: 'Pasta Carbonara', price: '$18.99', desc: 'Creamy sauce, pancetta, parmesan', image: 'photo-1612874742237-6526221588e3' },
      { name: 'Lasagna Bolognese', price: '$19.99', desc: 'Layered pasta, meat sauce, bechamel', image: 'photo-1574894709920-11b28e7367e3' },
      { name: 'Risotto ai Funghi', price: '$17.99', desc: 'Creamy mushroom risotto, truffle oil', image: 'photo-1476124369491-c6e4f2e0b700' },
      { name: 'Tiramisu', price: '$8.99', desc: 'Classic Italian dessert, mascarpone', image: 'photo-1571877227200-a0d98ea607e9' },
      { name: 'Osso Buco', price: '$24.99', desc: 'Braised veal shanks, gremolata', image: 'photo-1544025162-d76694265947' }
    ];

    return (
      <section id="menu" className="py-20 bg-[var(--secondary-color)]" data-name="menu" data-file="components/Menu.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Menu</h2>
            <div className="inline-block mt-4 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-semibold text-lg">
              🎉 Special Offer: 20% OFF on all pasta dishes this week!
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={`https://images.unsplash.com/${item.image}?w=400&q=80`} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-[var(--primary-color)] font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-[var(--text-light)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Menu component error:', error);
    return null;
  }
}
