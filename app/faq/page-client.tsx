"use client";

import { useId, useState } from "react";

const faqAnswer = {
  intro:
    "We use analytics tools (such as Google Analytics) to track site visits without transferring personal information. We have disabled all features that can collect or report personal data, including:",
  points: [
    "Demographics and Interest Reports",
    "User ID features",
    "Advertising Reporting Features",
  ],
};

const faqQuestions = [
  "Why do I need to use a Design System?",
  "Why do I need to use a Design System?",
  "How is the living environment for astronauts in space?",
  "Can astronauts communicate with their families and friends while in space?",
  "What is Space Industries and what does the company do?",
  "What are the requirements to be eligible for the astronaut program?",
  "Can I choose the type of mission or spacecraft I will be assigned to?",
];

export default function FaqList() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-list" aria-label="Frequently asked questions">
      {faqQuestions.map((question, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <article className={`faq-item${isOpen ? " is-open" : ""}`} key={`${question}-${index}`}>
            <button
              className="faq-question"
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <img
                className="faq-question-mark"
                src="/assets/faq/Bullet.svg"
                alt=""
                aria-hidden="true"
              />
              <span className="faq-question-text">{question}</span>
              <span className="faq-question-chevron" aria-hidden="true" />
            </button>

            {isOpen && (
              <div
                className="faq-answer"
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
              >
                <p>{faqAnswer.intro}</p>
                <ul>
                  {faqAnswer.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
