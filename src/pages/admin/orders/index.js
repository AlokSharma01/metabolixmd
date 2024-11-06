import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout';
import AdminNavBar from '@/components/admin modules/Header';
import Link from 'next/link';
import Pagination from '@/components/admin modules/Pagination';
import { getMethod } from '@/services/API/ApiMethod';

const OrdersList = () => {
  const [containerHeight, setContainerHeight] = useState(400);
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    const updateHeight = () => {
      // Calculate height based on viewport height, e.g., 80% of the viewport
      const newHeight = window.innerHeight * 0.75;
      setContainerHeight(newHeight);
    };

    // Set initial height
    updateHeight();

    // Update height on resize
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const getOrderdata = async () => {
    const res = await getMethod("/order")

    if (res?.data) {
      setOrderData(res.data?.results)
    }
    console.log(res)
  }

  useEffect(() => {
    getOrderdata()
  }, [])


  return (
    <AdminLayout>
      <div>
        <AdminNavBar title="Orders Management" />
        <section className='p-5 flex flex-col gap-5'>
          {/* <div className='flex items-center justify-between gap-10'>
            <input type="search" placeholder='Search order by id' className='bg-white outline-none px-3 py-2 rounded-md' />
          </div> */}
          <div className="bg-white">

            <div className="bg-[#F0F2F5] min-w-fit w-full">
              <div className="items-center grid grid-cols-orderTable justify-between p-4 bg-liteOrange text-lg">
                <span className="text-black font-medium font-sans text-sm">Order Id</span>
                <span className="text-black font-medium font-sans text-sm">User Name</span>
                <span className="text-black font-medium font-sans text-sm">Date Ordered</span>
                <span className="text-black font-medium font-sans text-sm flex items-center justify-between gap-1">Status</span>
                {/* <span className="text-black font-medium font-sans text-sm"></span> */}
              </div>
            </div>

            <div className="flex flex-col bg-white min-w-fit w-full overflow-y-auto" style={{ maxHeight: containerHeight, overflowY: 'auto' }}>
              {
                orderData.map((order) => {
                  return (
                    <Link key={order._id} href={"/users/"+order._id}>
                      <div className="grid grid-cols-orderTable justify-between border-b border-[#E9E9EC] items-center p-4">
                        <span className=" font-sans font-semibold text-sm">{order._id}</span>
                        <div className="flex flex-row items-center gap-2">
                          <div className="flex flex-col">
                            <p className="text-sm font-sans font-medium">{order.user.name?order.user.name:"NA"}</p>
                            <p className="text-sm font-normal font-sans text-zinc-500">{order.user.email}</p>
                          </div>
                        </div>
                        <span className=" font-sans font-semibold text-sm">{new Date(order.createdAt).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</span>

                        <div className={`py-1 justify-center  px-3 w-full rounded-md  border font-sans font-semibold text-sm flex flex-row capitalize items-center gap-2  ${order.status =="placed"?"text-[#2BAB4B] border-[#2BAB4B]":"text-yellow-400 border-yellow-400"}`}>
                          {order.status}
                        </div>
                        {/* <span className=" font-sans font-semibold text-sm">...</span> */}
                      </div>
                    </Link>
                  )

                })
              }


            </div>
          </div>

          <div className='flex justify-end bg-transparent'>
            <Pagination currentPage={3} totalPages="10" />
          </div>

        </section>
      </div>
    </AdminLayout>
  );
};

export default OrdersList;
