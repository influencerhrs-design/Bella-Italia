function Team() {
  const members = [
    { name: "Marco Rossi", role: "Head Chef" },
    { name: "Sofia Romano", role: "Sous Chef" },
    { name: "Antonio Vitale", role: "Pastry Chef" },
    { name: "Lucia Marino", role: "Restaurant Manager" }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A passionate team bringing authentic Italian flavors to your table.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="shadow rounded p-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
                👤
              </div>
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-red-600">{m.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
    }  }
}
