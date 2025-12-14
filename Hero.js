function Hero() {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4">
          True Taste of Italy
        </h2>
        <p className="text-xl mb-6">
          Authentic Italian cuisine made with love.
        </p>
        <button
          className="px-6 py-3 bg-red-600 text-white rounded"
          onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}
        >
          View Menu
        </button>
      </div>
    </section>
  );
            }                    <div className="icon-star text-2xl text-[var(--primary-color)]"></div>
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
