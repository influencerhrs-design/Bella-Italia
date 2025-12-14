function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="icon-utensils text-2xl text-[var(--primary-color)]"></div>
              <span className="text-2xl font-bold text-[var(--text-dark)]">Bella Italia</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition">About</button>
              <button onClick={() => scrollToSection('menu')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition">Menu</button>
              <button onClick={() => scrollToSection('team')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition">Team</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary">Contact Us</button>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl text-[var(--text-dark)]">
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'}`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition text-left">About</button>
              <button onClick={() => scrollToSection('menu')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition text-left">Menu</button>
              <button onClick={() => scrollToSection('team')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition text-left">Team</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary w-full">Contact Us</button>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
      }
