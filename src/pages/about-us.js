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
            isApproved: false,
            mainRole: "Co-Founder",
            designation: "Consultant",
            detailedJob:"Advanced Nurse Practitioner and Consultant at MetabolixMD",
            description: (
                <p className='text-lg'>
                    At MetabolixMD, we&apos;re committed to excellence in every aspect of our care. That&apos;s why we&apos;ve partnered with the top pharmaceutical companies to offer the best GLP-1 and GLP-1/GIP agonists available. Our treatments are:
                    <ul>
                        <li>FDA-approved and certified</li>
                        <li>Sourced from reputable manufacturers with a proven track record of quality and safety</li>
                        <li>Backed by rigorous scientific research and testing</li>
                    </ul>
                    {/* More content here */}
                </p>
            )
        },
        {
            route: "about-mohit",
            img: "/images/dr4.png",
            name: "Mohit Chawla",
            subName: "MD",
            isApproved: false,
            mainRole: "",
            designation: "Consultant",
            detailedJob:"Advanced Nurse Practitioner and Consultant at MetabolixMD",
            description: (
                <p className='text-lg'>
                    Dr. Mohit Chawla brings a wealth of knowledge and expertise to MetabolixMD. {/* More content */}
                </p>
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
            detailedJob:"Advanced Nurse Practitioner and Consultant at MetabolixMD",
            description: (
                <p className='text-lg'>
                    Dr. Joseph Rizzo is a key part of our team, providing high-quality consultations and expert medical guidance. {/* More content */}
                </p>
            )
        },
        {
            route: "about-raj",
            img: "/images/dr2.png",
            name: "Raj Sabar",
            subName: "MD",
            isApproved: true,
            mainRole: "",
            designation: "Consultant",
            detailedJob:"Advanced Nurse Practitioner and Consultant at MetabolixMD",
            description: (
                <p className='text-lg'>
                    Dr. Raj Sabar has extensive experience in metabolic health and wellness. {/* More content */}
                </p>
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
                    <div className='mt-20'>
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
