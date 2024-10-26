import DetailsPage from '@/components/DetailsPage'
import Footer from '@/components/Footer'
import Introduction from '@/components/Intro'
import MeetExpertBackground from '@/components/MeetExpertBackground'
import NavBar from '@/components/NavBar'
import React from 'react'
import { useRouter } from 'next/router' // Import useRouter

const AboutUs = () => {
    const router = useRouter(); // Initialize router
    const { details } = router.query; // Destructure details from query

    // Expert details array
    const expertDetails = [
        {
            route: "about-ashley",
            img: "/images/dr1.png",
            name: "Ashley Donaldson",
            subName: "FNP-BC",
            isApproved: true,
            mainRole: "Co-Founder",
            designation: "Consultant",
            detailedJob: "Advanced Nurse Practitioner and Consultant at MetabolixMD",
            description: (
                <div className='text-lg'>
                    <p className='mt-3'>
                        <b>Ashley Donaldson, FNP-C</b>, is a highly experienced Nurse Practitioner with over 14 years of expertise in both primary and urgent care settings. Throughout her career, she has been dedicated to promoting preventative health, managing chronic conditions, and delivering acute care to diverse populations. Ashley has a deep passion for evidence-based practice, ensuring that her patients receive the most current and effective treatments to enhance their well-being and quality of life.
                    </p>
                    <p className='mt-3'>
                        As a co-founder and consultant at <b>MetabolixMD</b>, Ashley focuses on optimizing patient outcomes through personalized care strategies and lifestyle interventions. She brings extensive experience from her time working independently in urgent care, where she assessed, diagnosed, and treated a wide range of acute illnesses and injuries. Additionally, Ashley played a key role in developing a wellness clinic aimed at fostering healthy living through weight management, smoking cessation, and self-care education.
                    </p>
                    <p className='mt-3'>
                        Ashley began her healthcare journey in the fast-paced environment of the Emergency Department at Covenant Medical Center, where she provided compassionate care to critically ill patients experiencing acute trauma, heart attacks, strokes, and other life-threatening conditions. This foundational experience shaped her collaborative approach to healthcare, working closely with physicians and multidisciplinary teams to deliver the highest standard of patient care.
                    </p>
                    <p className='mt-3'>
                        Alongside her clinical achievements, Ashley holds a Master of Science in Nursing from Texas Tech Health Science Center, with board certification through the American Academy of Nurse Practitioners and prescriptive authority from the Texas Board of Nursing. She also maintains certifications in Basic Life Support (BLS) and Advanced Cardiovascular Life Support (ACLS).
                    </p>
                    <p className='mt-3'>
                        Beyond her professional endeavors, Ashley is an accomplished athlete and avid runner, embracing an active lifestyle that reflects her commitment to health and wellness. A major milestone in her running journey was completing the 2024 Boston Marathon—a prestigious event and a testament to her dedication, discipline, and resilience. Her achievement in this renowned race exemplifies the same goal-oriented mindset she brings to her clinical practice, inspiring her patients to overcome challenges and unlock their full health potential.
                    </p>
                </div>

            )
        },
        {
            route: "about-mohit",
            img: "/images/dr4.png",
            name: "Mohit Chawla",
            subName: "MD",
            isApproved: true,
            mainRole: "",
            designation: "Consultant",
            detailedJob: "",
            description: (
                <div className='text-lg'>
                    <p className='mt-3'>
                        <b>Dr. Mohit Chawla, M.D.</b>, is an exceptional physician with specialized expertise in geriatric care, general medicine, pain management, and palliative care. Driven by a passion for patient-centered care, Dr. Chawla has held key roles at respected institutions, including the Pain Management Centers of America, Grand Island Pain Relief Center, and St. Bernards Healthcare, where he treated complex cases across multiple disciplines. His broad clinical experience enables him to meet the nuanced needs of aging populations while managing chronic pain and end-of-life care with empathy and precision.
                    </p>
                    <p className='mt-3'>
                        Dr. Chawla’s educational background is extensive, marked by multiple advanced fellowships. He completed his Hospice and Palliative Care training at both Rush University and John H. Stroger, Jr. Hospital, followed by a Geriatric Medicine Fellowship at the University of Alabama at Birmingham. Prior to these, he completed his Family Medicine Residency at Creighton University School of Medicine and earned his MBBS from Manipal College of Medical Sciences, Nepal. These achievements reflect his commitment to continuous learning and clinical excellence.
                    </p>
                    <p className='mt-3'>
                        As a consultant at <b>MetabolixMD</b>, Dr. Chawla leverages his vast knowledge and hands-on experience to optimize patient outcomes, with a focus on holistic well-being and quality of life. His ability to integrate pain management, palliative care, and geriatrics allows him to offer comprehensive, personalized solutions that address each patient’s unique needs.
                    </p>
                    <p className='mt-3'>
                        Outside his professional life, Dr. Chawla enjoys traveling and exploring new cultures, experiences that enrich his perspective and contribute to his well-rounded approach to medicine. His diverse interests, combined with his clinical expertise, make him a valuable asset to the MetabolixMD team and a trusted partner in helping patients achieve healthier, more fulfilling lives.
                    </p>
                </div>

            )
        },
        {
            route: "about-joseph",
            img: "/images/dr3.png",
            name: "Joseph Rizzo",
            subName: "MD",
            isApproved: true,
            mainRole: "",
            designation: "Consultant",
            detailedJob: "",
            description: (
                <div className='text-lg'>
                    <p className='mt-3'>
                        <b>Dr. Joseph Rizzo</b>, born in March 1954 in the Bronx, NY, is a distinguished cardiologist with a career spanning over three decades. He earned his <b>M.D.</b> from <i>New York Medical College</i> after beginning his academic journey at the University of Torino. Dr. Rizzo completed his residency and fellowships in internal medicine and cardiology in New York, with a focus on advanced cardiovascular care at North Shore University Hospital.
                    </p>

                    <p className='mt-3'>
                        Throughout his career, Dr. Rizzo practiced in Lubbock, TX, where he held prominent roles at JAJ Cardiology, LLC, and Covenant Medical Center. He is board certified in cardiovascular diseases, internal medicine, interventional cardiology, and anti-aging medicine. In addition to his clinical expertise, Dr. Rizzo held leadership positions, including Cardiology Section Chief and Director of Cardiac Rehabilitation.
                    </p>

                    <p className='mt-3'>
                        Currently, Dr. Rizzo serves as the Chief Consultant of <b>MetabolixMD</b>, where he brings his extensive experience and expertise in cardiology and metabolic health to guide innovative medical practices. Although he retired from active clinical practice in October 2020, his dedication to the field remains unwavering. Through his consultancy work, Dr. Rizzo continues to make significant contributions to advancing healthcare, mentoring young professionals, and advocating for best practices in patient management.
                    </p>
                </div>

            )
        },
        {
            route: "about-raj",
            img: "/images/dr2.png",
            name: "Raj Sabar",
            subName: "MD",
            isApproved: true,
            mainRole: "CEO",
            designation: "Consultant",
            detailedJob: "",
            description: (
                <div className='text-lg'>
                    <p className='mt-3'>
                        Meet <b>Dr. Raj</b>, a consultant with <b>MetabolixMD</b>, who has personally experienced the transformative power of Tirzepatide in his own weight loss journey. A dedicated fitness enthusiast, Dr. Raj was committed to living a healthy lifestyle, staying active, and eating well, yet he found himself stuck at a frustrating weight loss plateau. That all changed when he discovered Tirzepatide, a groundbreaking advancement in metabolic health.
                    </p>
                    <p className='mt-3'>
                        With the help of Tirzepatide, Dr. Raj overcame the barriers that had slowed his progress, achieving remarkable, sustainable results. This personal success not only improved his physical health but also reignited his passion for helping others. Inspired by his journey, Dr. Raj joined MetabolixMD as a consultant, eager to guide patients through their own weight loss transformations with the same powerful approach.
                    </p>
                    <p className='mt-3'>
                        Dr. Raj’s unique combination of personal experience, medical expertise, and enthusiasm for fitness makes him an invaluable asset to the MetabolixMD team. He understands firsthand the physical and emotional challenges of weight management, which allows him to offer empathetic, personalized care to his patients. Dr. Raj is committed to empowering individuals to overcome obstacles, reach their goals, and embrace healthier, more fulfilling lives.
                    </p>
                    <p className='mt-3'>
                        In his free time, Dr. Raj enjoys cooking Indian cuisine, exploring new flavors, and sharing meals with family and friends. When he isn’t in the kitchen, you’ll often find him on the golf course, practicing his swing, or simply enjoying the outdoors. His well-rounded lifestyle reflects the same balance he strives to help his patients achieve—health, happiness, and personal fulfillment.
                    </p>
                </div>
            )
        }
    ];

    // Find the active expert based on the details query parameter
    const activeExpert = expertDetails.find(expert => `about-${expert.name.split(" ")[0].toLowerCase()}` === details);

    return (
        <div className='font-tt-hoves flex flex-col min-h-screen'>
            <NavBar />
            {
                details && activeExpert ? (
                    <div className='my-20 md:mx-10 '>
                        <DetailsPage
                            img={activeExpert.img}
                            name={activeExpert.name}
                            subName={activeExpert.subName}
                            isApproved={activeExpert.isApproved}
                            mainRole={activeExpert.mainRole}
                            designation={activeExpert.designation}
                            detailedJob={activeExpert.detailedJob}
                        >
                            {activeExpert.description}
                        </DetailsPage>
                    </div>
                ) : (
                    <div className=' mt-24'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl text-primary px-5 '>
                            MEET OUR EXPERTS
                        </h2>
                        <div className='flex flex-col gap-10 mt-10 p-5 '>
                            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 bigxl:grid-cols-4 gap-10 '>
                                {expertDetails.map(expert => (
                                    <MeetExpertBackground
                                        key={expert.route}
                                        route={expert.route}
                                        name={expert.name}
                                        subName={expert.subName}
                                        isApproved={expert.isApproved}
                                        mainRole={expert.mainRole}
                                        designation={expert.designation}
                                    >
                                        <img src={expert.img} className='min-h-[600px] object-cover' />
                                    </MeetExpertBackground>
                                ))}
                            </div>
                        </div>
                        <Introduction />
                    </div>
                )
            }
            <Footer />
        </div>
    )
}

export default AboutUs;
