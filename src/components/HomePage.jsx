import React from 'react'
import NavBar from './NavBar'
import FaqList from './Faq'
import MeetExpertBackground from './MeetExpertBackground'
import CompareModule from './CompareModule'

import { getAuthToken } from '@/services/API/apiHelper'
import Link from 'next/link'

const WeightLossMedication = () => {
    let token = getAuthToken()
    return (
        <div className='font-tt-hoves' >
            <NavBar />
            <section className='flex flex-col-reverse lg:flex-row   min-h-[600px] gap-10 sm:border-b'>
                <div className='flex-1 flex text-center md:text-start flex-col justify-center    px-2 md:px-10'>
                    <h1 className='text-3xl md:text-4xl    font-medium text-wrap'>
                        {/* Get Access to prescription<br />
                        <b className='text-orange-500 text-wrap'>Weight Loss </b>
                        Medication Online */}
                        Unlock Your Weight Loss Potential with <b className='text-orange-500 text-wrap'>MetabolixMD</b>
                    </h1>
                    <p className='mt-3 text-sm  text-zinc-500'>
                        Discover our revolutionary GLP-1, GLP-1/GIP program, expertly crafted to support your journey to a healthier, happier you. Our dedicated team will guide you every step of the way.


                    </p><p className='mt-3 text-sm  text-zinc-500'>Schedule a consultation and see if you qualify for our program.
                        We partner only with top-notch 503A and 503B pharmacies to ensure seamless delivery of our premium compounded medicines, directly to your door.</p>
                    {
                        token ?
                            <Link href="/get-started" className='bg-primary hidden  h-[40px] md:h-fit w-fit mx-auto md:mx-0 md:flex items-center justify-center p-4 px-10 md:w-[300px] text-white  text-lg rounded-full mt-6'>
                                GET STARTED
                            </Link>
                            :
                            <Link href="/login" className='bg-primary hidden  h-[40px] md:h-fit w-fit mx-auto md:mx-0 md:flex items-center justify-center p-4 px-10 md:w-[300px] text-white  text-lg rounded-full mt-6'>
                                GET STARTED
                            </Link>
                    }

                    <div className='flex justify-center md:justify-start items-center gap-4  my-5'>
                        <Link href="#safety" className='text-sm underline text-primary '>
                            Important safety information
                        </Link>

                        <Link href="#safety" className='bg-white border-primary border rounded-full size-10 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </Link>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(/images/medicine.png)` }} className='bg-[#d3d2cc] min-h-[300px] flex-1 bg-contain  bg-center bg-no-repeat'>

                </div>
            </section>
            <section className='px-3 md:px-10 mt-10 '>
                <div className='flex  flex-wrap md:items-center md:gap-5 '>
                    <h2 className='text-3xl min-w-fit md:flex-1 text-center md:text-start md:text-4xl lg:text-5xl flex-1'>
                        <b className='text-primary'>Prescription </b>
                        ingredients <br />
                        for personalised care.
                    </h2>
                    <div className='flex-1 flex justify-center md:justify-end mb-5'>
                        <Link href="/get-started" className='bg-primary  flex items-center justify-center p-4 px-20 md:px-8 max-h-[80px] w-fit md:w-[300px] md:h-[100px]  text-sm md:text-lg  text-white  ms:text-lg rounded-xl mt-6 '>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className='mt-5 flex gap-10  overflow-x-scroll'>

                    <div className='min-w-full md:min-w-fit'>
                        <div className=' bg-[#d8d6d3] px-5 py-7  rounded-3xl '>
                            <div className='flex flex-wrap items-center justify-between w-full  gap-10'>
                                <div className=''>
                                    <h2 className='w-fit text-primary  text-4xl'>
                                        Semaglutide
                                    </h2>
                                    <p>Injection (GLP-1s)</p>
                                </div>

                                <div className='bg-primary text-xs px-5 p-2 text-white md:p-4 rounded-3xl md:px-10'>
                                    In Stock
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(/images/41.png)` }} className='h-[400px] min-w-full md:min-w-[350px]  flex    bg-contain bg-right bg-no-repeat'>
                                <div className='flex flex-col justify-between items-center'>
                                    <div></div>
                                    <div className='flex items-center bg-brown-400 gap-5  drop-shadow-2xl backdrop-filter bg-clip-padding backdrop-blur-md bg-opacity-100 px-5 py-3  rounded-3xl '>
                                        <p className='text-sm md:text-lg text-white '>See If <b className='text-primary'>GLP-1s</b> are right for me? </p>
                                        <Link href="/get-started" className='bg-white rounded-full size-12 min-w-12 md:size-14 md:min-w-14 flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center my-2'>
                            <Link href="#safety" className='text-sm underline text-primary '>
                                Important safety information
                            </Link>
                        </div>
                    </div>
                    <div className='min-w-full md:w-[350px] md:min-w-fit'>
                        <div className=' bg-[#d8d6d3] px-5 py-7  rounded-3xl '>
                            <div className='flex flex-wrap items-center justify-between w-full  gap-10'>
                                <div className=''>
                                    <h2 className='w-fit text-primary  text-4xl'>
                                        Tirzepatide
                                    </h2>
                                    <p>Injection </p>
                                </div>

                                <div className='bg-primary text-xs px-5 p-2 text-white md:p-4 rounded-3xl md:px-10'>
                                    In Stock
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(/images/medicine-2.png)` }} className='h-[400px] min-w-full md:min-w-[350px]  flex    bg-contain bg-right bg-no-repeat'>
                                <div className='flex flex-col justify-between items-center'>
                                    <div></div>
                                    <div className='flex items-center bg-brown-400 gap-5  drop-shadow-2xl backdrop-filter bg-clip-padding backdrop-blur-md bg-opacity-100 px-5 py-3  rounded-3xl '>
                                        <p className='text-sm md:text-lg text-white '>See If <b className='text-primary'>GLP-1s</b> are right for me? </p>
                                        <Link href="/get-started" className='bg-white rounded-full size-12 min-w-12 md:size-14 md:min-w-14 flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center my-2'>
                            <Link href="#safety" className='text-sm underline text-primary '>
                                Important safety information
                            </Link>
                        </div>
                    </div>
                    <div className='min-w-full md:w-[350px] md:min-w-fit'>
                        <div className=' bg-[#d8d6d3] px-5 py-7  rounded-3xl '>
                            <div className='flex flex-wrap items-center justify-between w-full  gap-10'>
                                <div className=''>
                                    <h2 className='w-fit text-primary  text-4xl'>
                                        Tirzepatide
                                    </h2>
                                    <p>Injection </p>
                                </div>

                                <div className='bg-primary text-xs px-5 p-2 text-white md:p-4 rounded-3xl md:px-10'>
                                    In Stock
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(/images/42.png)` }} className='h-[400px] min-w-full md:min-w-[350px]  flex    bg-contain bg-right bg-no-repeat'>
                                <div className='flex flex-col justify-between items-center'>
                                    <div></div>
                                    <div className='flex items-center bg-brown-400 gap-5  drop-shadow-2xl backdrop-filter bg-clip-padding backdrop-blur-md bg-opacity-100 px-5 py-3  rounded-3xl '>
                                        <p className='text-sm md:text-lg text-white '>See If <b className='text-primary'>GLP-1s</b> are right for me? </p>
                                        <Link href="/get-started" className='bg-white rounded-full size-12 min-w-12 md:size-14 md:min-w-14 flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#365d56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center my-2'>
                            <Link href="#safety" className='text-sm underline text-primary '>
                                Important safety information
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='mt-5 text-zinc-400'>
                    Semaglutide and Tirzepatide facilitate significant weight loss by reducing appetite and slowing gastric emptying. They effectively lower blood glucose levels, improving the management of type 2 diabetes. These medications also reduce the risk of cardiovascular events, such as heart attacks and strokes. With a low risk of hypoglycemia, they act primarily in response to elevated blood sugar levels. Additionally, they may help reduce liver fat and improve liver function, offering potential benefits.
                </p>

            </section>
            <section style={{ backgroundImage: "url(/images/20.png)" }} className='h-screen  backdrop-filter bg-clip-padding backdrop-blur-md  flex flex-col justify-center   mt-10 bg-cover bg-no-repeat bg-center bg-opacity-50 '>
                <div className='md:mx-20  '>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl pl-5 '>
                        Looking to<b className='text-orange-400'> shed </b>some <br />
                        pounds?
                    </h2>
                    <p className='mt-10 max-w-48 text-lg pl-5'>
                        We&apos;ve got you covered!

                        Lose weight

                        With <b className='text-orange-400'>GLP-1s</b>.
                    </p>

                    <div className='flex items-center mt-20'>

                        <div style={{ backgroundImage: "url(images/orange-logo.png)" }} className='w-[250px] h-24 bg-contain bg-center bg-no-repeat'>

                        </div>

                    </div>
                </div>
            </section>
            <section className='min-h-96 h-screen flex justify-center items-center border-b'>

                <h2 className='text-2xl md:text-4xl lg:text-5xl text-primary text-center '>
                    Weight loss treatment for

                    <br />where you are now</h2>
            </section>
            {/* <section className='mt-10 p-5'>
                <div className='flex flex-wrap items-center justify-between gap-10'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl text-primary'>
                        MEET OUR EXPERTS

                    </h2>
                    <img src="/images/logo.png" />
                </div>

                <div className='flex overflow-x-scroll  gap-10 mt-10'>
                    <div className='max-w-[500px]'>
                        <MeetExpertBackground>
                            <img src="/images/24.png" className='min-h-[600px] object-cover' />
                        </MeetExpertBackground>

                        <h3 className='text-4xl font-bold text-primary'>Ashley Donaldson, MSN, RN, FNP-BC</h3>
                        <p className='text-2xl  text-primary'>Advanced Nurse Practitioner and Consultant at MetabolixMD</p>
                    </div>
                    <div className='max-w-[500px]'>
                        <MeetExpertBackground>
                            <img src="/images/25.png" className='min-h-[600px] object-cover' />
                        </MeetExpertBackground>

                        <h3 className='text-4xl font-bold text-primary'>Raj sabar, MD</h3>
                        <p className='text-2xl  text-primary'>Consultant</p>
                    </div>
                    <div className='max-w-[500px]'>
                        <MeetExpertBackground>
                            <img src="/images/mohit.png" className='min-h-[600px] object-cover' />
                        </MeetExpertBackground>

                        <h3 className='text-4xl font-bold text-primary'>Dr Mohit chawla</h3>
                        <p className='text-2xl  text-primary'>Consultant Physician</p>
                    </div>
                </div>

                <p className='mt-3'>
                    *with a 12-mo subscription. Pay upfront in full. Actual price to customer will depend on product and subscription plan purchase.

                    Compounded semaglutide, including Hims & Hers’ product (pictured above), is not approved or evaluated for safety, efficacy, or quality by FDA. <br />

                    Wegovy® (semaglutide) and Ozempic® (semaglutide) are not compounded. Wegovy® (semaglutide) is FDA-approved for weight loss. Ozempic® (semaglutide) is FDA-approved for type 2 diabetes treatment but may be prescribed off-label for weight loss at a healthcare provider’s discretion.
                </p>
                <Link href="#safety" className='text-sm underline text-primary'>
                    Important safety information
                </Link>
            </section> */}

            <section className='flex flex-col md:flex-row flex-wrap items-center h-[600px] p-2 md:px-10'>
                <div className='flex-1  md:px-10'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-start'>
                        Frequently asked questions
                    </h2>
                    <Link href="/get-started" className='bg-primary mx-auto md:mx-0 flex items-center justify-center md:justify-start p-4 px-20 max-h-[80px] w-fit text-sm md:text-base  text-white  ms:text-lg rounded-xl mt-6 '>
                        Get Started
                    </Link>
                </div>
                <div className='flex-1'>
                    <FaqList />
                </div>

            </section>
            <section className='mt-10 bg-[#d3d2cc] p-5 mb-10 '>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mt-10 mb-5'>
                    Transformations
                </h2>

                <CompareModule
                    img1="/images/21.png"
                    img2="/images/22.png"
                    desc="Transformation after taking GLP-1 medication" />

                <CompareModule
                    img1="/images/38.png"
                    img2="/images/39.png"
                    desc="Transformation after taking GLP-1 medication" />
            </section>
            <section className='flex flex-wrap p-5 gap-10 justify-between md:p-10 md:mb-20'>
                <div className='w-[320px]'>
                    <h4 className='text-primary text-2xl font-bold'>Access to licensed providers</h4>
                    <p className='mt-2'>
                        Ongoing care comes from an experienced Care Team and vetted providers specializing in weight loss—at no extra cost.
                    </p>
                </div>
                <div className='w-[320px]'>
                    <h4 className='text-primary text-2xl font-bold'>Tailored dosage regimens</h4>
                    {/* <p className='mt-3'>What sets you apart from your competition? Is it your offerings? Your philosophies? Or your values? </p> */}
                    <p className='mt-2'>
                        Dosage plans are tailored to your specific weight loss goals and preferences.
                    </p>
                </div>
                <div className='w-[320px]'>
                    <h4 className='text-primary text-2xl font-bold'>Fast and free shipping</h4>
                    {/* <p className='mt-3'>What sets you apart from your competition? Is it your offerings? Your philosophies? Or your values? </p> */}
                    <p className='mt-2'>
                        Temperature-controlled shipping ensures optimal preservation of medication by maintaining the required temperature throughout transit.
                    </p>
                </div>
            </section>

            <section className=' bg-black p-5 h-screen flex items-center'>
                <div className='flex w-full items-center gap-10'>
                    <div className=' text-white'>
                        <img src="/images/logo-white.png" className='w-96' />
                        <p className='mt-10 '>
                            Call: +123-456-7980
                            <br />
                            Email: hello@reallygreatsite.com
                        </p>
                        <p className='mt-10 font-medium'>
                            Powered by MetabolixMD, 2024
                        </p>

                    </div>

                </div>
            </section>
            <section id="safety" className='md:p-10 px-5 mt-10'>

                <h2 className='font-semibold text-primary text-3xl md:text-4xl lg:text-5xl'>
                    IMPORTANT SAFETY INFORMATION
                </h2>

                <div className='flex flex-col gap-2 mt-10'>
                    <p>
                        <b>COMPOUNDED SEMAGLUTIDE</b> is a glucagon-like peptide-1 (GLP-1) receptor agonist indicated as an adjunct to a reduced-calorie diet and increased physical activity for chronic weight management in adults with an initial body mass index (BMI) of:

                        27 kg/m2 or greater (overweight or obesity)
                    </p>

                    <p>
                        <b> Limitations of Use:</b>

                        Co-administration with other COMPOUNDED SEMAGLUTIDE-containing products or any GLP-1 receptor agonist is not recommended.

                        The safety and efficacy of coadministration with other products for weight management have not been established.

                        COMPOUNDED SEMAGLUTIDE has not been studied in patients with a history of pancreatitis.
                    </p>



                    <div >
                        <b>
                            IMPORTANT SAFETY INFORMATION
                        </b>
                        <br />

                        <b className='text-orange-400'> WARNING:</b> RISK OF THYROID C-CELL TUMORS See full prescribing information for complete boxed warning.
                        <ul className='list-disc px-10 my-5'>
                            <li>
                                In rodents, SEMAGLUTIDE causes thyroid C-cell tumors in clinically relevant exposures. It is unknown whether SEMAGLUTIDE causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans as the human relevance of SEMAGLUTIDE-induced rodent thyroid C-cell tumors has not been determined

                            </li>
                            <li>

                                SEMAGLUTIDE is contraindicated in patients with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding the potential risk of MTC and symptoms of thyroid tumors.

                            </li>
                        </ul>
                    </div>
                </div>




                <h4 className='font-semibold mt-5'>Do not take COMPOUNDED SEMAGLUTIDE if you:</h4>

                <ul className='list-disc px-10 my-5'>
                    <li>
                        Have a personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN2).
                    </li>
                    <li>
                        Have been diagnosed with Diabetes (Type 1 or 2).
                    </li>
                    <li>
                        Have been diagnosed with pancreatitis or have a history of pancreatitis.
                    </li>
                    <li>
                        Have a diagnosis or history of gastroparesis - severe problems with your stomach, such as slowed emptying of your stomach (gastroparesis) or problems with digesting food.
                    </li>
                    <li>
                        Have a known allergy to semaglutide/any other GLP-1 drug or any of the inactive ingredients in COMPOUNDED SEMAGLUTIDE. Inactive ingredients include: di-sodium hydrogen phosphate dihydrate, sodium chloride, benzyl alcohol, hydrochloric acid, sodium hydroxide pellets, and water.
                    </li>
                    <li>
                        Have a history of suicidal attempts or active suicidal ideation.
                    </li>
                </ul>



                <h4 className='font-semibold mt-5'>WARNINGS AND PRECAUTIONS</h4>

                <ul className='list-disc px-10 my-5'>
                    <li>
                        Acute Pancreatitis: Has occurred in clinical trials. Discontinue promptly if pancreatitis is suspected. Do not restart if pancreatitis is confirmed.
                    </li>
                    <li>
                        Acute Gallbladder Disease: Has occurred in clinical trials. If cholelithiasis is suspected, gallbladder studies and clinical follow-up are indicated.
                    </li>
                    <li>
                        Gastroparesis: Uncommon, but more serious, gastrointestinal adverse effect may also occur more frequently with GLP-1 receptor agonists than with other weight loss agents.
                    </li>
                    <li>
                        Hypoglycemia: Concomitant use with an insulin secretagogue or insulin may increase the risk of hypoglycemia, including severe hypoglycemia. Reducing the dose of insulin secretagogue or insulin may be necessary. Inform all patients of the risk of hypoglycemia and educate them on the signs and symptoms of hypoglycemia.
                    </li>
                    <li>
                        Acute Kidney Injury: Has occurred. Monitor renal function when initiating or escalating doses of COMPOUNDED SEMAGLUTIDE in patients reporting severe adverse gastrointestinal reactions or in those with renal impairment reporting severe adverse gastrointestinal reactions.
                    </li>
                    <li>
                        Hypersensitivity Reactions: Anaphylactic reactions and angioedema have been reported postmarketing. Discontinue COMPOUNDED SEMAGLUTIDE if suspected and promptly seek medical advice.
                    </li>
                    <li>
                        Females and Males of Reproductive Potential: Discontinue COMPOUNDED SEMAGLUTIDE at least 2 months before a planned pregnancy because of the long half-life of COMPOUNDED SEMAGLUTIDE.
                    </li>
                    <li>
                        Pregnancy: May cause fetal harm. When pregnancy is recognized, discontinue COMPOUNDED SEMAGLUTIDE immediately.
                    </li>
                    <li>
                        Diabetic Retinopathy Complications in Patients with Type 2 Diabetes: Has been reported in trials with COMPOUNDED SEMAGLUTIDE. Patients with a history of diabetic retinopathy should be monitored. Diabetic retinopathy damages blood vessels in the retina and can scar your retina. As the scars get bigger, they can pull on your retina and detach it from the back of your eye, a serious condition called retinal detachment.
                    </li>
                    <li>
                        Heart Rate Increase: Monitor heart rate at regular intervals.
                    </li>
                    <li>
                        Suicidal Behavior and Ideation: Monitor for depression or suicidal thoughts. Discontinue COMPOUNDED SEMAGLUTIDE if symptoms develop.
                    </li>
                    <li>
                        A recent study suggested there may be a connection between semaglutide use and increased risk for a blinding eye disease called non-arteritic anterior ischemic optic neuropathy (NAION). There isn&apos;t enough data yet to suggest patients should be concerned or should stop taking their medications. People who have diabetes are already at risk for NAION, whether they use semaglutide or not. It is premature to conclude that the association is a causal association. More research is necessary to test the hypothesis. Until then, patients should be aware of this information and make a careful, informed choice based on their individual risk profile.
                    </li>
                    <li>
                        Side Effects: Most common side effects (incidence ≥ 5%) in adults or pediatric patients aged 12 years and older are: nausea, diarrhea, vomiting, constipation, abdominal pain, headache, fatigue, dyspepsia, dizziness, abdominal distension, eructation, hypoglycemia in patients with type 2 diabetes, flatulence, gastroenteritis, gastroesophageal reflux disease, and nasopharyngitis.
                    </li>
                    <li>
                        To report SUSPECTED ADVERSE REACTIONS, contact the FDA at 1-800-FDA-1088 or www.fda.gov/medwatch.
                    </li>
                    <li>
                        Drug Interactions: COMPOUNDED SEMAGLUTIDE delays gastric emptying. May impact absorption of concomitantly administered oral medications. Use with caution.
                    </li>
                    <li>
                        Use in Specific Populations: Pregnancy - May cause fetal harm. When pregnancy is recognized, discontinue COMPOUNDED SEMAGLUTIDE.
                    </li>
                    <li>
                        Females and Males of Reproductive Potential: Discontinue COMPOUNDED SEMAGLUTIDE at least 2 months before a planned pregnancy because of the long half-life of COMPOUNDED SEMAGLUTIDE.
                    </li>
                </ul>



            </section>
        </div>
    )
}

export default WeightLossMedication