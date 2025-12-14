function Header() {
  const [open, setOpen] = React.useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bella Italia</h1>

        <nav className="hidden md:flex gap-6">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("menu")}>Menu</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("menu")}>Menu</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
                                                             }            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
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
