import { useContext } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCity,
} from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';

const CheckoutForm = () => {
 const {user, handlePlaceOrder, totalPayableAmount} = useContext(AuthContext);
 
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-md text-custom-teal shadow-md p-6 md:p-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
        Please fill in the details below to complete your order. 
        </h2>
        {/* Billing Details */}
        <form  onSubmit={handlePlaceOrder} className="space-y-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <div className="flex items-center border rounded-md p-2 mt-1">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full outline-none text-gray-700"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <div className="flex items-center border rounded-md p-2 mt-1">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full outline-none text-gray-700"
                defaultValue={user?.email} 
                name="email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <div className="flex items-center border rounded-md p-2 mt-1">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="tel"
                className="w-full outline-none text-gray-700"
                placeholder="017XXXXXXXX"
                name="phoneNumber"
                required
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <label className="block text-gray-700">Shipping Address</label>
            <div className="flex items-center border rounded-md p-2 mt-1">
              <FaHome className="text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full outline-none text-gray-700"
                placeholder="House No, Street Name"
                name="address"
                required
              />
            </div>
          </div>

          {/* City Selection */}
          <div>
            <label className="block text-gray-700">City</label>
            <div className="flex items-center border rounded-md p-2 mt-1">
              <FaCity className="text-gray-400 mr-2" />
              <select
                className="w-full outline-none text-gray-700"
                name="city"
                required
              >
                <option value="" disabled selected>Select your city</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">Payment Method</h3>
              <p className="text-lg font-semibold text-gray-800">Total: {totalPayableAmount} Tk</p>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                className="form-radio h-4 w-4 text-blue-600"
                checked
                readOnly
              />
              <label className="ml-2 text-gray-700">Cash on Delivery</label>
            </div>
          </div>     

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-custom-gradient-red text-white font-semibold py-3 rounded-md"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
