
import Pothos from "../assets/Pothos.jpg";
import Lavender from "../assets/Lavender.jpg";
import Lantana from "../assets/Lantana.jpg";

import Sunflower from "../assets/Sunflower.jpg";

export default function Cart() {
  const cartItems = [
    { name: "Sunflower", type: "Flowers", price: 12.5, quantity: 4, img: Sunflower },
    { name: "Lantana", type: "Flowers", price: 20.0, quantity: 2, img: Lantana },
    { name: "Lavender", type: "Flowers", price: 30.0, quantity: 1, img: Lavender },
    { name: "Pothos", type: "Indoor Plant", price: 20.0, quantity: 2, img: Pothos },
  ];

  return (
    <div className="container mx-auto px-4 py-8 my-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="hidden md:grid md:grid-cols-[2fr,1fr,1fr,1fr] gap-4 mb-4 bg-yellow-400 p-4 rounded-lg">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.name} className="grid md:grid-cols-[2fr,1fr,1fr,1fr] gap-4 items-center border rounded-lg p-4">
                <div className="flex gap-4 items-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <img src={item.img} alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.type}</p>
                  </div>
                </div>
                <div className="text-gray-900">${item.price.toFixed(2)}</div>
                <div className="flex items-center">
                  <button className="p-1 text-sm text-gray-500 border rounded-full hover:bg-gray-200">
                    -
                  </button>
                  <input type="number" value={item.quantity} className="w-14 text-center border rounded-lg" readOnly />
                  <button className="p-1 text-sm text-gray-500 border rounded-full hover:bg-gray-200">
                    +
                  </button>
                </div>
                <div className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="mt-8 flex gap-4">
            <input type="text" placeholder="Coupon Code" className="shadow border p-2 rounded-full" />
            <button className="bg-green-700 hover:bg-green-800 text-white rounded-full p-3">Apply Coupon</button>
            <button className="text-green-700 underline">Clear Shopping Cart</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 lg:mt-0">
          <div className="rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between border-t pt-4 font-semibold">
                <span>Total</span>
                <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-green-700 hover:bg-green-800 p-3 text-white rounded-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


