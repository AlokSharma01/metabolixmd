import SuccessPropt from '@/components/froms/SuccessPropt';
import MultiStepForm from '@/components/MultiStepForm'
import NavBar from '@/components/NavBar'
import { getMethod } from '@/services/API/ApiMethod';
import React, { useEffect, useState } from 'react'

const GetStarted = () => {
  const [userOrders, setUserOrders] = useState([]);

  const getOrderDetails = async () => {
    try {
      const res = await getMethod("/order/user");
      if (res) {
        setUserOrders(res.data);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);
  return (
    <div>
      <NavBar />


      {
        userOrders.length > 0 ?
          <div className="multi-step-form py-10 mt-20 md:py-5 font-tt-hoves bg-[#d3d2cc]  min-h-screen flex flex-col justify-center items-center">
            <SuccessPropt type="2" />
          </div>
          :
          <MultiStepForm />
      }
    </div>
  )
}

export default GetStarted