import { Product } from "@/types";

interface HeroProps {
  product: Product;
}

export default function Hero({ product }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <span className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">
              🌱 Trusted Nursery in Kerala
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Welcome to
              <br />
              <span className="text-green-700">
                Amma Gardens
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="text-5xl font-bold text-green-700">
                ₹{product.price}
              </span>

              <p className="text-gray-500 mt-2">
                Price per plant
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#product"
                className="inline-block bg-green-700 hover:bg-green-800 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Shop Current Plant
              </a>
            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md aspect-square flex flex-col items-center justify-center">

              <div className="text-8xl">
                🌳
              </div>

              <p className="mt-6 text-gray-500 text-lg text-center">
                Product Image
                <br />
                (We'll replace this later)
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}