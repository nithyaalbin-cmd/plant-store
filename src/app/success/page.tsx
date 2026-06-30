import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-xl w-full text-center">

        <div className="text-7xl mb-6">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-green-700">
          Order Placed Successfully!
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Thank you for choosing <strong>Amma Gardens</strong>.
        </p>

        <p className="mt-3 text-gray-600">
          We have received your order and will contact you soon on your
          WhatsApp number to confirm delivery details.
        </p>

        <div className="mt-10 bg-green-100 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-green-700">
            What's Next?
          </h2>

          <ul className="mt-4 text-left text-gray-700 space-y-2">
            <li>✅ Your order has been saved.</li>
            <li>📞 Amma Gardens will contact you shortly.</li>
            <li>🌱 Your plant will be prepared for delivery.</li>
          </ul>
        </div>

        <Link href="/">
          <button className="mt-10 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition">
            Back to Home
          </button>
        </Link>

      </div>
    </main>
  );
}