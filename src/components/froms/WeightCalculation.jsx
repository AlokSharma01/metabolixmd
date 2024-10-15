import React from 'react'

const WeightCalculation = ({data, onNext }) => {
  const handleContinue = () => {
    // Assuming there's no additional data to pass here
    onNext({}, "basicsUserInfo"); // Replace "basicsUserInfo" with the actual next form step
  };
  return (
    <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto">
      <div className="w-full md:w-[500px]">
        <p>Your weight</p>
        <h2 className='text-5xl font-bold'>{data?.weight-40} lbs</h2>
        <p className='text-primary text-3xl font-semibold flex items-center gap-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          40 lbs
        </p>

        <div className='mt-10'>
          <h3 className='text-2xl font-bold'>Your treatment options</h3>
          <p className='text-zinc-500 '>
            <span className='text-black font-semibold'>
            Semaglutide, Tirzepatide
            </span>
            <br />
            Certain meds are available for pickup/delivery within 1-2 days if prescribed.
          </p>

          <button
            type="button"
            className={`mt-6 p-3 text-white w-full py-3 font-semibold rounded-full bg-primary hover:bg-primary`}
            onClick={handleContinue} // Trigger continue action
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeightCalculation;
