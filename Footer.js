function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-2xl font-bold mb-2">Bella Italia</h3>
            <p className="text-gray-400">
              Authentic Italian cuisine made with passion and tradition.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}>Menu</button></li>
              <li><button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</button></li>
              <li><button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          © 2025 Bella Italia. All rights reserved.
        </div>

      </div>
    </footer>
  );
  }                ))}
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
