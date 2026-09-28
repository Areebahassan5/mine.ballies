const products = [
  {
    name: "Premium Football",
    price: "Rs. 2,499",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=900&q=85",
  },
  {
    name: "Football Boots",
    price: "Rs. 4,999",
    image:
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=900&q=85",
  },
  {
    name: "Goalkeeper Gloves",
    price: "Rs. 1,999",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=900&q=85",
  },
  {
    name: "Football Jersey",
    price: "Rs. 2,499",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between border-b bg-white px-6 py-5 md:px-12">
        <h1 className="text-2xl font-extrabold tracking-tight">
          MINE <span className="text-green-600">BALLIES</span>
        </h1>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#products" className="hover:text-green-600">
            Products
          </a>
          <a href="#about" className="hover:text-green-600">
            About
          </a>
        </div>

        <a
          href="#products"
          className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
        >
          Shop Now
        </a>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="grid min-h-[600px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16"
      >
        <div>
          <p className="mb-5 font-bold tracking-[0.25em] text-green-600">
            FOOTBALL ACCESSORIES
          </p>

          <h2 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Play Hard.
            <br />
            <span className="text-green-600">Play Better.</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Welcome to Mine Ballies — your place for quality football
            accessories, stylish gear and everything you need to enjoy the
            beautiful game.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#products"
              className="rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white hover:bg-green-700"
            >
              Explore Products
            </a>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-7 py-3.5 font-semibold hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=90"
            alt="Football"
            className="h-[450px] w-full object-cover md:h-[520px]"
          />
        </div>
      </section>

      {/* 4 GOOD THINGS */}
      <section className="bg-gray-50 px-6 py-16 md:px-16">
        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="text-4xl">⚽</div>
            <h3 className="mt-4 text-lg font-bold">
              Quality Products
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Reliable football gear made for players who love the game.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="text-4xl">💚</div>
            <h3 className="mt-4 text-lg font-bold">
              Affordable Prices
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Great football accessories without breaking your budget.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="text-4xl">🚚</div>
            <h3 className="mt-4 text-lg font-bold">
              Fast Delivery
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Get your favourite football gear delivered quickly.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 text-center shadow-sm">
            <div className="text-4xl">🏆</div>
            <h3 className="mt-4 text-lg font-bold">
              Made For Players
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Gear designed for training, matches and everyday football.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-20 md:px-16">
        <div className="mb-12 text-center">
          <p className="font-bold tracking-[0.2em] text-green-600">
            OUR PRODUCTS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Football Essentials
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Everything you need to look good, train hard and play with
            confidence.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold">
                  {product.name}
                </h3>

                <p className="mt-2 font-bold text-green-600">
                  {product.price}
                </p>

                <button className="mt-5 w-full rounded-full bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-green-600">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-gray-900 px-6 py-20 text-white md:px-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold tracking-[0.2em] text-green-400">
            ABOUT MINE BALLIES
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Built For The Love Of Football
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Mine Ballies is a football accessories shop created for players,
            fans and football lovers. Our goal is simple — bring quality
            football gear, good prices and a great shopping experience
            together in one place.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white hover:bg-green-700"
          >
            Shop Our Collection
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-10 text-center text-white">
        <h2 className="text-2xl font-extrabold">
          MINE <span className="text-green-500">BALLIES</span>
        </h2>

        <p className="mt-2 text-gray-400">
          Football accessories for every player.
        </p>

        <p className="mt-5 text-sm text-gray-600">
          © 2026 Mine Ballies. All rights reserved.
        </p>
      </footer>

    </main>
  );
}

