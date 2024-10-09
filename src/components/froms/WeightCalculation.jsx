import React from 'react'

const WeightCalculation = ({data, onNext }) => {
  const handleContinue = () => {
    // Assuming there's no additional data to pass here
    onNext({}, "basicsUserInfo"); // Replace "basicsUserInfo" with the actual next form step
  };
  return (
    <div className="max-w-fit mx-auto">
      <div className="w-[500px]">
        <p>Your weight</p>
        <h2 className='text-5xl font-bold'>{data?.weight} lbs</h2>
        <p className='text-primary text-3xl font-semibold'>40 lbs</p>

        <div className='mt-10'>
          <h3 className='text-2xl font-bold'>Your treatment options</h3>
          <p className='text-zinc-500 '>
            <span className='text-black font-semibold'>
              Ozempic, Wegovy, Zepbound, compounded GLP-1
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
