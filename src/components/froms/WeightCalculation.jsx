import { useRouter } from 'next/navigation';
import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const WeightCalculation = ({ data, onNext }) => {
  const router = useRouter();

  const handleContinue = () => {
    onNext({}, "basicsUserInfo");
  };

  // Calculations for BMI
  const totalInches = parseInt(+data?.height.feet) * 12 + parseInt(+data?.height.inches);
  const heightInMeters = totalInches * 0.0254;
  const weightInKg = data.weight * 0.453592;
  const bmiValue = weightInKg / (heightInMeters * heightInMeters);

  // ApexCharts configuration
  const chartData = {
    series: [{
      name: 'Weight Data',
      data: [data.weight, data.weight - 40] // Example data points
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false, // Disable toolbar
        },
        zoom: {
          enabled: false // Disable zoom
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      grid: {
        show: false // Remove background grid lines
      },
      xaxis: {
        show: true // Show x-axis
      },
      yaxis: {
        show: true // Show y-axis
      },
      dataLabels: {
        enabled: false // Disable data labels
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      tooltip: {
        enabled: false // Disable tooltip
      },
      colors: ['#365d56'], // Set chart color
    }
  };

  return (
    <>
      {
        (bmiValue > 25) ?
          <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto">
            <div className="w-full md:w-[500px]">
              <p className='mb-5'>
                This graph shows that with GLP-1 and GLP-1/GIP agonist medications,
                you can expect to lose around 40 pounds over the course of a year.
              </p>
              {/* <p className='mt-2 text-xl font-semibold'>Your weight</p> */}
              <h2 className='text-5xl font-bold'>{data?.weight - 40} lbs</h2>
              <p className='text-primary text-3xl font-semibold flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
                  <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
                </svg>
                40 lbs
              </p>

              {/* Chart */}
              <div className='mt-2'>
                <Chart options={chartData.options} series={chartData.series} type="area" height={350} />
                <h3 className='text-2xl font-bold mt-6'>Your treatment options</h3>
                <p className='text-zinc-500'>
                  <span className='text-black font-semibold'>
                    Semaglutide, Tirzepatide
                  </span>
                  <br />
                  Certain meds are available for pickup/delivery within 1-2 days if prescribed.
                </p>

                <button
                  type="button"
                  className={`mt-6 p-3 hover:bg-primary/90  text-white w-full py-3 font-semibold rounded-full bg-primary hover:bg-primary`}
                  onClick={handleContinue} 
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          :
          <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto">
            <div className="w-full md:w-[500px]">
              <h1 className='text-primary font-semibold text-3xl'>Thank you for reaching out to us.</h1>
              <p className='mt-5 text-lg font-normal'>
                We regret to inform you that, based on your current BMI, you do not meet the eligibility criteria for GLP-1 medication.
              </p>
              <p className='mt-5 text-lg font-normal'>
                We encourage you to continue prioritizing your health and well-being. If you have any further questions or need additional guidance, please feel free to contact us.
              </p>
              <p className='mt-5 text-lg font-normal mb-5'>
                Wishing you the best of health, <br />
                <b>The MetabolixMD Team</b>
              </p>
              <div onClick={() => router.push("/")} className='mt-6 p-3 text-white w-full text-center py-3 font-semibold rounded-full bg-primary hover:bg-primary'>Continue</div>
            </div>
          </div>
      }
    </>
  );
};

export default WeightCalculation;
