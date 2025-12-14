function ScrollToTop() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', toggleVisibility);

      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return (
      <>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[var(--primary-color)] text-white rounded-full shadow-lg hover:opacity-90 transition-all duration-300 z-40 flex items-center justify-center"
            data-name="scroll-to-top"
            data-file="components/ScrollToTop.js"
          >
            <div className="icon-arrow-up text-xl"></div>
          </button>
        )}
      </>
    );
  } catch (error) {
    console.error('ScrollToTop component error:', error);
    return null;
  }
}
