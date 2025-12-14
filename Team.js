function Team() {
  try {
    const teamMembers = [
      { name: 'Marco Rossi', role: 'Head Chef', image: 'photo-1577219491135-ce391730fb2c' },
      { name: 'Sofia Romano', role: 'Sous Chef', image: 'photo-1594744803329-e58b31de8bf5' },
      { name: 'Antonio Vitale', role: 'Pastry Chef', image: 'photo-1560250097-0b93528c311a' },
      { name: 'Lucia Marino', role: 'Restaurant Manager', image: 'photo-1573496359142-b8d87734a5a2' }
    ];

    return (
      <section id="team" className="py-20 bg-white" data-name="team" data-file="components/Team.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Our passionate team of culinary experts brings years of experience and authentic Italian traditions to every dish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img src={`https://images.unsplash.com/${member.image}?w=400&q=80`} alt={member.name} className="w-full h-80 object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[var(--primary-color)] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Team component error:', error);
    return null;
  }
}
