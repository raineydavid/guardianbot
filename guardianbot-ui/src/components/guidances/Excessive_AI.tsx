import React from "react";

const ExcessiveAIGuidance = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        GuardianBot: Guidance for Teachers - Addressing Excessive AI Chatbot Use
        (Students Aged 5-15)
      </h1>
      <p className="mb-4">
        This guidance outlines the steps teachers should take when GuardianBot
        flags excessive AI chatbot use by a student. It emphasizes student
        well-being, open communication, and a balanced approach to technology.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        I. Immediate Actions & Teacher Responsibilities:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Review the Alert:</strong> Understand the extent of the
          flagged usage (frequency, duration). Consider the times of day the
          chatbot is being accessed.
        </li>
        <li>
          <strong>Informal Check-in:</strong> Initiate a casual conversation
          with the student.
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students (5-9):</strong> "What games or activities
              do you enjoy online?" "Do you spend time talking to any computer
              friends?"
            </li>
            <li>
              <strong>Older Students (10-15):</strong> "I've noticed you've been
              spending time chatting with [chatbot name]. What do you enjoy
              about it?" "How does it fit in with your other activities?"
            </li>
          </ul>
        </li>
        <li>
          <strong>Document Initial Observations:</strong> Note any changes in
          the student's behaviour, academic performance, or social interactions.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        II. Appropriate Escalation & Support Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Further Investigation:</strong> If concerns arise, schedule a
          more formal meeting with the student.
        </li>
        <li>
          <strong>Involve Pastoral Support:</strong> Inform the student’s Head
          of Year/Pastoral Lead.
        </li>
        <li>
          <strong>Counselor Referral:</strong> If needed, refer the student to
          the school counselor.
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
              <strong>Younger Students:</strong> Discuss healthy online habits
              and balancing screen time.
            </li>
            <li>
              <strong>Older Students:</strong> Discuss time management and
              responsible technology use.
            </li>
          </ul>
        </li>
        <li>
          <strong>Communication with Parents/Guardians:</strong>
          <p>
            "We've noticed [student's name] is spending a significant amount of
            time interacting with an AI chatbot. Let's discuss strategies for
            balancing online and offline activities."
          </p>
        </li>
        <li>
          <strong>Stakeholder Engagement:</strong> Keep relevant staff informed
          for a coordinated approach.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        IV. Preventive & Educational Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Digital Wellbeing Curriculum:</strong> Teach healthy
          technology use and time management.
        </li>
        <li>
          <strong>E-Safety Assemblies/Workshops:</strong> Educate students on AI
          chatbot limitations and online safety.
        </li>
        <li>
          <strong>Parent Information Sessions:</strong> Provide guidance on
          screen time management.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        V. Compliance & Data Privacy:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>UK GDPR & Data Protection Act 2018:</strong> Follow legal data
          protection principles.
        </li>
        <li>
          <strong>Safeguarding Standards:</strong> Escalate concerns to the DSL
          as needed.
        </li>
        <li>
          <strong>Confidentiality & Data Security:</strong> Store records
          securely with restricted access.
        </li>
      </ul>

      <p className="mt-6">
        This guidance provides a framework. Teachers should adapt based on
        individual student needs and consult school leadership for complex
        cases.
      </p>
    </div>
  );
};

export default ExcessiveAIGuidance;
