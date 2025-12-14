function Menu() {
  const items = [
    { name: "Margherita Pizza", price: "$16.99", desc: "Mozzarella, basil, tomato sauce" },
    { name: "Pasta Carbonara", price: "$18.99", desc: "Creamy sauce, pancetta, parmesan" },
    { name: "Lasagna Bolognese", price: "$19.99", desc: "Layered pasta, meat sauce" },
    { name: "Risotto ai Funghi", price: "$17.99", desc: "Mushroom risotto, truffle oil" },
    { name: "Tiramisu", price: "$8.99", desc: "Classic Italian dessert" },
    { name: "Osso Buco", price: "$24.99", desc: "Braised veal shanks" }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="inline-block px-6 py-3 bg-red-600 text-white rounded-full">
            🎉 20% OFF on all pasta dishes this week!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <span className="text-red-600 font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
            }      </section>
    );
  } catch (error) {
    console.error('Menu component error:', error);
    return null;
  }
}
