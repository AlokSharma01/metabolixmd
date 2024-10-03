import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={toggleFaq}
        className="w-full gap-2 text-left flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqList = () => {
  const faqs = [
    {
      question: "What are my weight loss treatment options through Hims?",
      answer:
        "Hims offers several weight loss treatments tailored to individual needs, including medications and consultations.",
    },
    {
      question: "What medications do you offer?",
      answer:
        "Hims provides FDA-approved medications for weight loss under the guidance of healthcare professionals.",
    },
    {
      question: "How much does weight loss treatment cost?",
      answer:
        "The cost depends on the treatment plan, typically ranging from $50 to $100 per month.",
    },
    {
      question: "Is insurance required?",
      answer:
        "No, insurance is not required. Hims provides affordable, out-of-pocket options for treatments.",
    },
  ];

  return (
    <div className="w-full mx-auto  px-2">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
