import { postWithFileMethod } from '@/services/API/ApiMethod';
import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const UploadPrescription = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false)
  const [preUrl, setPreUrl] = useState("")
  const [img, setImg] = useState("")
  const fileInputRef = useRef()
  const handleFile = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setImg(file)
    const fileURL = URL.createObjectURL(file);
    setPreUrl(fileURL)

  }

  const handleUpload = async () => {

    if (img) {
      if (checked) {
        setLoading(true)
        var formdata = new FormData();
        formdata.append("image", img)
        // formdata.append("title", title)
        let resp = await postWithFileMethod("/prescription", formdata)
        setLoading(false)
        toast(resp?.message)
      } else {
        toast("Accept our policies!")
      }
    }
    else {
      toast("Select Prescription!")
    }
  }
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="w-full p-5 md:p-0 md:max-w-fit  mx-auto">
      <div className="w-full md:w-[500px] text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload prescription</h2>

        <div onClick={() => fileInputRef.current.click()} className="border-2 h-[300px] border-primary border-dashed rounded-lg p-10 mb-4 flex items-center justify-center">
          {
            preUrl ?
              <div style={{backgroundImage:`url(${preUrl})`}} className="w-full min-h-full cursor-pointer bg-contain bg-no-repeat bg-center ">
               
              </div>
              :
              <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                <p className="text-gray-500">
                  upload prescription in <span className="text-primary">jpg, png, pdf</span>
                </p>
              </div>
          }
          <input disabled={loading} type="file" accept="image/*" ref={fileInputRef} onChange={(e) => handleFile(e)} hidden />
        </div>

        <div className="flex items-center gap-2 justify-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={checked}
            onChange={handleCheckboxChange}
            className="min-h-[20px] min-w-[20px] accent-primary"
          />
          <label htmlFor="terms" className=" text-sm text-gray-600">
            I agree to the <span className="font-semibold text-primary">terms & conditions</span> of metabolixMD.
          </label>
        </div>

        <button
          type="button"
          className={`mt-6 p-3 text-white w-full font-semibold rounded-full bg-primary hover:bg-primary-dark ${!checked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={!checked || loading}
          onClick={handleUpload}
        >
          {
            loading ?
            "Uploading..."
            :
            "Upload"
          }
        </button>
      </div>
    </div>
  );
};

export default UploadPrescription;
