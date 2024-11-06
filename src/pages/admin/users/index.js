import React, { useState, useEffect } from 'react';
import AdminLayout from '../layout';
import AdminNavBar from '@/components/admin modules/Header';
import Link from 'next/link';
import Pagination from '@/components/admin modules/Pagination';
import { getMethod } from '@/services/API/ApiMethod';

const UsersList = () => {
  const [containerHeight, setContainerHeight] = useState(400);
  const [userData, setUserData] = useState([])

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

  const getUserdata = async () => {
    const res = await getMethod("/users")

    if (res?.data) {
      setUserData(res.data?.results)
    }
    
  }

  useEffect(() => {
    getUserdata()
  }, [])

  return (
    <AdminLayout>
      <div>
        <AdminNavBar title="Users Management" />
        <section className='p-5 flex flex-col gap-5'>
          {/* <div className='flex items-center justify-between gap-10'>
            <input type="search" placeholder='Search user' className='bg-white outline-none px-3 py-2 rounded-md' />
          </div> */}
          <div className="bg-white">

            <div className="bg-[#F0F2F5] min-w-fit w-full">
              <div className="items-center grid grid-cols-userTable justify-between p-4 bg-liteOrange text-lg">
                <span className="text-black font-medium font-sans text-sm">User Id</span>
                <span className="text-black font-medium font-sans text-sm">Name</span>
                <span className="text-black font-medium font-sans text-sm">Date joined</span>
                <span className="text-black font-medium font-sans text-sm">Type of Member</span>
                <span className="text-black font-medium font-sans text-sm">Date of issue</span>
                <span className="text-black font-medium font-sans text-sm">Valid Till</span>
                <span className="text-black font-medium font-sans text-sm flex items-center justify-between gap-1">Status</span>
              </div>
            </div>
            <div className="flex flex-col bg-white min-w-fit w-full overflow-y-auto" style={{ maxHeight: containerHeight, overflowY: 'auto' }}>

              <div className="grid grid-cols-userTable justify-between border-b border-[#E9E9EC] items-center p-4">
                <span className="text-userblack font-sans font-semibold text-sm">#012364</span>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col">
                    <p className="text-sm font-sans font-medium">Henry Fiat</p>
                    <p className="text-sm font-normal font-sans text-zinc-500">(406) 555-0120</p>
                  </div>
                </div>
                <span className="text-userblack font-sans font-semibold text-sm">Feb 27, 2022</span>
                <span className="text-userblack font-sans font-semibold text-sm">VIP</span>
                <span className="text-userblack font-sans font-semibold text-sm">Feb 27, 2022</span>
                <span className="text-userblack font-sans font-semibold text-sm">Feb 27, 2022</span>
                <div className="py-1 justify-center px-3 w-full rounded-md border-[#B9F4C8] border font-sans font-semibold text-sm flex flex-row items-center gap-2 text-[#2BAB4B]">
                  Active
                </div>
              </div>
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

export default UsersList;
