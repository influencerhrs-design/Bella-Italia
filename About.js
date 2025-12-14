function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-6">About Bella Italia</h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Since 1985, Bella Italia has been serving authentic Italian dishes
          made with fresh ingredients, traditional recipes, and a passion
          for great food.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold mb-2">👨‍🍳 Expert Chefs</h3>
            <p className="text-gray-500">
              Trained in traditional Italian cooking.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold mb-2">🌿 Fresh Ingredients</h3>
            <p className="text-gray-500">
              Locally sourced, quality produce.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold mb-2">❤️ Family Recipes</h3>
            <p className="text-gray-500">
              Passed down through generations.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="text-xl font-bold mb-2">🏆 Award Winning</h3>
            <p className="text-gray-500">
              Recognized for excellence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
            }  }
}
