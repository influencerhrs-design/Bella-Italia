function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);function App() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <About />
        <Menu />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
