function Footer() {
  try {
    const socialLinks = [
      { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
      { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
      { icon: 'youtube', url: 'https://youtube.com', label: 'YouTube' }
    ];

    return (
      <footer className="bg-[var(--text-dark)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="icon-utensils text-2xl text-[var(--primary-color)]"></div>
                <span className="text-2xl font-bold">Bella Italia</span>
              </div>
              <p className="text-gray-400">Experience authentic Italian cuisine with fresh ingredients and traditional recipes.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition">Menu</button>
                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition">About</button>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="block text-gray-400 hover:text-white transition">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-all duration-300">
                    <div className={`icon-${social.icon} text-xl`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bella Italia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
