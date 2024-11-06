import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout';
import AdminNavBar from '@/components/admin modules/Header';
import Link from 'next/link';
import Pagination from '@/components/admin modules/Pagination';
import { getMethod } from '@/services/API/ApiMethod';

const PrescriptionList = () => {
  const [containerHeight, setContainerHeight] = useState(400);
  const [orderData, setOrderData] = useState([]);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = window.innerHeight * 0.75;
      setContainerHeight(newHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const getOrderData = async () => {
    const res = await getMethod("/prescription");
    if (res?.data) {
      setOrderData(res.data?.results);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  const handleApprove = async () => {
    // Make API call for approval
    await postMethod(`/approve-prescription/${selectedOrderId}`);
    setIsApproveModalOpen(false);
    getOrderData(); // Refresh data
  };

  const handleReject = async () => {
    // Make API call for rejection
    await postMethod(`/reject-prescription/${selectedOrderId}`);
    setIsRejectModalOpen(false);
    getOrderData(); // Refresh data
  };


  return (
    <AdminLayout>
      <div>
        <AdminNavBar title="Prescription Management" />
        <section className='p-5 flex flex-col gap-5'>
          {/* <div className='flex items-center justify-between gap-10'>
            <input type="search" placeholder='Search order by id' className='bg-white outline-none px-3 py-2 rounded-md' />
          </div> */}
          <div className="bg-white">

            <div className="bg-[#F0F2F5] min-w-fit w-full">
              <div className="items-center grid grid-cols-presTable justify-between p-4 bg-liteOrange text-lg">
                <span className="text-black font-medium font-sans text-sm">Id</span>
                <span className="text-black font-medium font-sans text-sm">User Name</span>
                <span className="text-black font-medium font-sans text-sm">Date Ordered</span>
                <span className="text-black font-medium font-sans text-sm flex items-center justify-between gap-1">Status</span>
                <span className="text-black font-medium font-sans text-sm"> Action</span>
                <span className="text-black font-medium font-sans text-sm"> Read </span>
              </div>
            </div>

            <div className="flex flex-col bg-white min-w-fit w-full overflow-y-auto" style={{ maxHeight: containerHeight, overflowY: 'auto' }}>
              {
                orderData.map((order) => {
                  return (

                    <div key={order._id} className="grid grid-cols-presTable justify-between border-b border-[#E9E9EC] items-center p-4">
                      <span className=" font-sans font-semibold text-sm">{order._id}</span>
                      <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-col">
                          <p className="text-sm font-sans font-medium">{order.user.name ? order.user.name : "NA"}</p>
                          <p className="text-sm font-normal font-sans text-zinc-500">{order.user.email}</p>
                        </div>
                      </div>
                      <span className=" font-sans font-semibold text-sm">{new Date(order.createdAt).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</span>

                      <div className={`py-1 px-3 justify-center w-full rounded-md  border font-sans font-semibold text-sm flex flex-row capitalize items-center gap-2  ${order.status == "placed" ? "text-[#2BAB4B] border-[#2BAB4B]" : "text-yellow-400 border-yellow-400"}`}>
                        {order.status}
                      </div>
                      <span className=" font-sans font-semibold text-sm flex items-center gap-2 ">
                        {/* approve button */}
                        <p onClick={() => {
                          setSelectedOrderId(order._id);
                          setIsApproveModalOpen(true);
                        }} className='cursor-pointer text-green-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                        </p>
                        {/* reject button */}
                        <p onClick={() => {
                          setSelectedOrderId(order._id);
                          setIsRejectModalOpen(true);
                        }} className='cursor-pointer text-red-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        </p>
                      </span>
                      <span onClick={() => {
                        setSelectedImage(order.image?.url);
                        setIsImageModalOpen(true);
                      }} className=" font-sans font-semibold text-center ">
                        ...
                      </span>
                    </div>
                  )

                })
              }

            </div>
          </div>

          <div className='flex justify-end bg-transparent'>
            <Pagination currentPage={3} totalPages="10" />
          </div>

        </section>

        {/* Approve Modal */}
        {isApproveModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-md">
              <p>Are you sure you want to accept this prescription?</p>
              <div className="flex justify-end gap-3 mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleApprove}>
                  Yes
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={() => setIsApproveModalOpen(false)}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reject Modal */}
        {isRejectModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-md">
              <p>Are you sure you want to reject this prescription?</p>
              <div className="flex justify-end gap-3 mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleReject}>
                  Yes
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={() => setIsRejectModalOpen(false)}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {isImageModalOpen && (
          <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white min-w-fit p-5 rounded-md">
              <img src={selectedImage} alt="Prescription" className="max-w-full max-h-96" />
              <div className="flex gap-5 justify-end mt-4">
                <a href={selectedImage}  target='_blank' className="bg-green-300 px-4 py-2 rounded-md" download>
                  Download
                </a>
                <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={() => setIsImageModalOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default PrescriptionList;



