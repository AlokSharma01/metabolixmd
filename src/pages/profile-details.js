import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { getMethod } from "@/services/API/ApiMethod";
import { toast } from "react-toastify";
import { getAuthToken } from "@/services/API/apiHelper";
import { getUser, setUser } from "@/services/Auth/cookies";

const ProfileDetails = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [userDetails, setUserDetails] = useState("");

  const getOrderDetails = async () => {
    try {
      const res = await getMethod("/order/user");
      console.log(res)
      if (res) {
        setUserOrders(res.data);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    getOrderDetails();
    let user = getUser()
    setUserDetails(user)
  }, []);

  return (
    <div className="flex flex-col min-h-screen mt-20">
      <NavBar />
      <div className="w-full mx-auto mt-10 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Profile Details</h2>

        <div className="mb-4">
          {/* <p className="text-gray-600">
            <span className="font-semibold">Name:</span> {userDetails.name}
          </p> */}
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {userDetails}
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2">Order Details</h3>
        <ul className="space-y-2">
          {userOrders.map((order) => (
            <li key={order._id} className="p-4 bg-gray-100 rounded-lg">
              <div className="mb-2">
                <p className="font-semibold">Order ID: {order._id}</p>
                <p className="font-semibold text-gray-600">
                  Status:{" "}
                  <span
                    // className={`${
                    //   order.status === "Delivered"
                    //     ? "text-green-500"
                    //     : order.status === "Processing"
                    //     ? "text-yellow-500"
                    //     : "text-blue-500"
                    // }`}
                  >
                    {order.status}
                  </span>
                </p>
              </div>
              <div className="text-gray-600">
                <p>
                  <span className="font-semibold">Address:</span> {order?.deliveryAddress?.street},{" "}
                  {order?.deliveryAddress?.city}, {order?.deliveryAddress?.state},{" "}
                  {order?.deliveryAddress?.country}, {order?.deliveryAddress?.postalCode}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileDetails;
