import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout';
import AdminNavBar from '@/components/admin modules/Header';
import Pagination from '@/components/admin modules/Pagination';
import { getMethod } from '@/services/API/ApiMethod';
import { useRouter } from 'next/router';

const OrdersList = () => {
  const [containerHeight, setContainerHeight] = useState(400);
  const [orderData, setOrderData] = useState([]);
  const [status, setStatus] = useState("all");  // Track selected status
  const [totalPages, setTotalPages] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);  // Users per page
  const router = useRouter();
  const { page = 1 } = router.query;
  const [isView, setIsView] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [data, setData] = useState({})

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

  const getOrderData = async (status, page, limit) => {
    let url = `/order?page=${page}&limit=${limit}`;
    if (status !== "all") {
      url += `&status=${status}`;
    }
    const res = await getMethod(url);
    if (res?.data) {
      setOrderData(res.data.results);
      setTotalPages(res.data.totalPages);
    }
  };

  useEffect(() => {
    getOrderData(status, page, usersPerPage);
  }, [status, page, usersPerPage]);

  const handleTabChange = (newStatus) => {
    setStatus(newStatus);
    router.push(`/admin/orders?page=1`);
  };
  const handleSelect=(e)=>{
    setUsersPerPage(Number(e.target.value))
    router.push(`/admin/orders?page=1`);
    
  }
  return (
    <AdminLayout>
      <div>
        <AdminNavBar title="Orders Management" />
        <section className='p-5 flex flex-col gap-5'>
          {/* <div className='flex items-center justify-between gap-10'>
            <input type="search" placeholder='Search order by id' className='bg-white outline-none px-3 py-2 rounded-md' />
          </div> */}
          <div className="tabs flex gap-4 mb-4">
            {["all", "placed", "pending"].map((tab) => (
              <button
                key={tab}
                className={`tab ${status === tab ? 'bg-white py-2 rounded-full px-5 font-semibold' : 'font-semibold'}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-white">

            <div className="bg-[#F0F2F5] min-w-fit w-full">
              <div className="items-center grid grid-cols-orderTable justify-between p-4 bg-liteOrange text-lg">
                <span className="text-black font-medium font-sans text-sm">Order Id</span>
                <span className="text-black font-medium font-sans text-sm">User Name</span>
                <span className="text-black font-medium font-sans text-sm">Date Ordered</span>
                <span className="text-black font-medium font-sans text-sm flex items-center justify-between gap-1">Status</span>
                <span className="text-black font-medium font-sans text-sm flex items-center justify-between gap-1">View</span>
                <span className="text-black font-medium font-sans text-sm flex items-center justify-between gap-1 text-center">Action</span>
              </div>
            </div>

            <div className="flex flex-col bg-white min-w-fit w-full overflow-y-auto" style={{ maxHeight: containerHeight, overflowY: 'auto' }}>
              {
                orderData.map((order) => {
                  return (

                    <div key={order._id} className="grid grid-cols-orderTable justify-between border-b border-[#E9E9EC] items-center p-4">
                      <span className=" font-sans font-semibold text-sm">{order._id}</span>
                      <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-col">
                          <p className="text-sm font-sans font-medium">{order.user.name ? order.user.name : "NA"}</p>
                          <p className="text-sm font-normal font-sans text-zinc-500">{order.user.email}</p>
                        </div>
                      </div>
                      <span className=" font-sans font-semibold text-sm">{new Date(order.createdAt).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}</span>

                      <div className={`py-1 justify-center  px-3 w-full rounded-md  border font-sans font-semibold text-sm flex flex-row capitalize items-center gap-2  ${order.status == "placed" ? "text-[#2BAB4B] border-[#2BAB4B]" : "text-yellow-400 border-yellow-400"}`}>
                        {order.status}
                      </div>
                      {/* view user qna */}
                      <span className='cursor-pointer' onClick={() => {
                        setSelectedOrder(order);
                        setData(order.detail)
                        setIsView(true);
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M8 6h10" /><path d="M6 12h9" /><path d="M11 18h7" /></svg>
                      </span>

                      {/* create order for user */}
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 14h6" /><path d="M12 17v-6" /></svg>
                      </span>
                    </div>

                  )

                })
              }


            </div>
          </div>

          <div className='flex justify-between items-center bg-transparent'>
            <div className="flex items-center gap-2">
              <label htmlFor="usersPerPage" className="text-sm font-medium">Users per page:</label>
              <select
                id="usersPerPage"
                className="bg-white px-2 py-1 rounded-md"
                value={usersPerPage}
                onChange={handleSelect}
              >
                {[10, 15, 20, 25, 30].map((count) => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </select>
            </div>
            {totalPages && (
              <Pagination
                currentPage={parseInt(page)}
                totalPages={totalPages}
                onPageChange={(newPage) => router.push(`/admin/orders?page=${newPage}`)}
              />
            )}
          </div>

        </section>

        {isView && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white min-w-fit p-5 rounded-md max-w-lg">
              <div>
                <h2 className="text-xl font-bold mb-4">{selectedOrder?.user?.name?selectedOrder?.user?.name:"User"} Details</h2>
                <div className="space-y-2">
                  <p><strong>Goal:</strong> {data?.accomplish_with_body_program.join(", ")}</p>
                  <p><strong>Height:</strong> {data?.height.feet} ft</p>
                  <p><strong>Weight:</strong> {data?.weight? data?.weight +" lbs" :"NA"} </p>
                  <p><strong>Gender:</strong> {data?.gender}</p>
                  <p><strong>Date of Birth:</strong> {data?.dob}</p>
                  <p><strong>ZIP Code:</strong> {data?.zipCode}</p>
                  <p><strong>Seen Primary Care Provider:</strong> {data?.seen_primary_care_provider ? "Yes" : "No"}</p>
                  <p><strong>Heart Condition:</strong> {data?.heart_condition.filter(Boolean).join(", ") || "None"}</p>
                  <p><strong>Hormone/Kidney/Liver Condition:</strong> {data?.hormone_kidney_liver_condition.filter(Boolean).join(", ") || "None"}</p>
                  <p><strong>Type 2 Diabetes:</strong> {data?.type_2_diabetes}</p>
                  <p><strong>Diabetic:</strong> {data?.diabetic}</p>
                  <p><strong>Additional Condition:</strong> {data?.additional_condition.join(", ")}</p>
                  <p><strong>Allergies:</strong> {data?.allergies.length > 0 ? data.allergies.join(", ") : "None"}</p>
                  <p><strong>Allergic to GLP-1:</strong> {data?.allergy_GLP_1 ? "Yes" : "No"}</p>
                  <p><strong>Medications:</strong> {data?.medications.join(", ")}</p>
                  <p><strong> Self Described:</strong> {data?.describe_yourself.join(", ")}</p>
                </div>
              </div>
              <div className="flex gap-5 justify-end mt-4">
               
                <button
                  className="bg-gray-300 px-4 py-2 rounded-md"
                  onClick={() => setIsView(false)}
                >
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

export default OrdersList;
