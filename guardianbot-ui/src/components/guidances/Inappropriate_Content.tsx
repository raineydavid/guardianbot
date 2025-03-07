import React from "react";

const InappropriateContent = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        GuardianBot: Guidance for Teachers - Addressing Inappropriate Content in
        AI Chatbot Interactions (Students Aged 5-15)
      </h1>
      <p className="mb-4">
        This guidance outlines the steps teachers should take when GuardianBot
        flags inappropriate content in a student's AI chatbot interactions. It
        prioritizes student safety, open communication, and adherence to UK
        safeguarding standards.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        I. Immediate Actions & Teacher Responsibilities:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Review Flagged Content:</strong> Carefully assess the nature
          and severity of the inappropriate content (language, topics, media).
        </li>
        <li>
          <strong>Initial Conversation (Age-Appropriate):</strong> Arrange a
          private, non-confrontational conversation with the student.
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students (5-9):</strong> "Can you tell me about
              what you were talking about with the chatbot?" "Are there any
              words or pictures you saw that made you feel uncomfortable?"
            </li>
            <li>
              <strong>Older Students (10-15):</strong> "I've noticed some
              concerning content in your recent chatbot interactions. Can you
              help me understand what was happening?" Emphasize that you are
              there to support them.
            </li>
          </ul>
        </li>
        <li>
          <strong>Document the Incident:</strong> Keep a confidential, factual
          record of the conversation, including the date, time, nature of the
          content, and the student's response. Do not include personal opinions
          or assumptions.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        II. Appropriate Escalation & Support Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Inform Designated Safeguarding Lead (DSL):</strong>{" "}
          Immediately inform the DSL if the content involves illegal activity,
          poses a risk of harm, or raises safeguarding concerns.
        </li>
        <li>
          <strong>Counselor Referral:</strong> If the student shows distress or
          related concerns, refer them to the school counselor.
        </li>
        <li>
          <strong>Senior Leadership Involvement:</strong> Inform senior
          leadership as per school safeguarding procedures.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        III. Detailed Communication Plan:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Communication with Students:</strong>
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students:</strong> Explain why the content is
              inappropriate in simple terms, relating it to school rules.
            </li>
            <li>
              <strong>Older Students:</strong> Discuss the risks, digital
              citizenship, online reputation, and legal implications.
            </li>
          </ul>
        </li>
        <li>
          <strong>Communication with Parents/Guardians:</strong>
          <p>
            "We've identified some concerning content in [student's name]'s
            interactions with an AI chatbot. We want to work with you to address
            this and ensure safe and responsible online behaviour." Avoid
            judgmental language.
          </p>
        </li>
        <li>
          <strong>Stakeholder Engagement:</strong> Keep relevant staff and
          external agencies informed while maintaining confidentiality.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        IV. Preventive & Educational Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Digital Literacy & Online Safety Curriculum:</strong> Teach
          responsible online behaviour, media literacy, and seeking help when
          needed.
        </li>
        <li>
          <strong>E-Safety Assemblies/Workshops:</strong> Reinforce respect,
          online safety, and responsible digital citizenship.
        </li>
        <li>
          <strong>Parent Information Sessions:</strong> Provide guidance on
          monitoring children's online activities and discussing online safety.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        V. Compliance & Data Privacy:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>UK GDPR & Data Protection Act 2018:</strong> Ensure lawful,
          fair, and transparent data processing. Obtain parental consent where
          required.
        </li>
        <li>
          <strong>Safeguarding Standards:</strong> Follow school policies,
          reporting concerns to the DSL.
        </li>
        <li>
          <strong>Confidentiality & Data Security:</strong> Securely store
          flagged content and records, limiting access to authorized personnel.
        </li>
      </ul>

      <p className="mt-6">
        This guidance provides a framework. Teachers should adapt based on the
        specific context and consult school leadership for complex cases.
      </p>
    </div>
  );
};

export default InappropriateContent;
