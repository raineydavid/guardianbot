import React from "react";

const ParasocialRelationships = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        GuardianBot: Guidance for Teachers - Addressing Potential Parasocial
        Relationships with AI Chatbots (Students Aged 5-15)
      </h1>
      <p className="mb-4">
        This guidance outlines the steps teachers should take when GuardianBot
        flags a potential parasocial relationship between a student and an AI
        chatbot. It prioritizes student well-being, open communication, and
        adherence to UK safeguarding standards.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        I. Immediate Actions & Teacher Responsibilities:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Review the Alert:</strong> Understand the nature of the
          flagged interaction. Consider the frequency, duration, and emotional
          content of the student's communication with the chatbot.
        </li>
        <li>
          <strong>Private Conversation:</strong> Arrange a private,
          non-judgmental conversation with the student.
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students (5-9):</strong> "Who are your favourite
              people to talk to? Do you talk to anyone online? What do you like
              to talk about with them?"
            </li>
            <li>
              <strong>Older Students (10-15):</strong> "I've noticed you've been
              spending time talking with [chatbot name]. Can you tell me a bit
              about that?" "How do these online conversations make you feel?"
            </li>
          </ul>
        </li>
        <li>
          <strong>Safeguarding Concerns:</strong> If the conversation reveals
          potential harm (e.g., emotional distress, vulnerability, inappropriate
          content), immediately inform the Designated Safeguarding Lead (DSL).
        </li>
        <li>
          <strong>Documentation:</strong> Keep a confidential record of the
          conversation, including date, time, key observations, and any actions
          taken.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        II. Appropriate Escalation & Support Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Consult with DSL:</strong> The DSL will advise on further
          action, including potential involvement of external agencies (if
          necessary).
        </li>
        <li>
          <strong>School Counselor Referral:</strong> If the student exhibits
          emotional distress or social difficulties, refer them to the school
          counselor for support.
        </li>
        <li>
          <strong>Pastoral Support:</strong> Inform the student's Head of
          Year/Pastoral Lead to ensure a coordinated approach to supporting the
          student's well-being.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        III. Detailed Communication Plan:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Communication with Students (Age-Appropriate):</strong>
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students:</strong> Focus on healthy friendships,
              emphasizing the importance of talking to trusted adults and
              real-life friends.
            </li>
            <li>
              <strong>Older Students:</strong> Discuss the nature of online
              relationships, the limitations of AI, and the importance of
              balanced social interactions. Explain that chatbots cannot replace
              human connection.
            </li>
          </ul>
        </li>
        <li>
          <strong>Communication with Parents/Guardians:</strong>
          <p>
            "We've noticed [student's name] has developed a close interaction
            with an AI chatbot. We want to work with you to ensure [he/she]
            understands the difference between online interactions and real-life
            relationships and maintains a healthy social balance. We encourage
            you to have conversations at home about online safety and healthy
            relationships.” Discuss observed behaviours, potential risks, and
            strategies for supporting the student at home.
          </p>
        </li>
        <li>
          <strong>Stakeholder Engagement:</strong> Keep relevant staff (SLT,
          pastoral team) informed, respecting data privacy.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        IV. Preventive & Educational Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Digital Literacy Curriculum:</strong> Integrate lessons on
          healthy online relationships, AI limitations, and responsible
          technology use.
        </li>
        <li>
          <strong>E-Safety Assemblies/Workshops:</strong> Educate students on
          online safety, including the risks of over-reliance on online
          interactions.
        </li>
        <li>
          <strong>Parent Information Sessions:</strong> Offer sessions for
          parents on supporting children's online safety and fostering healthy
          social development.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        V. Compliance & Data Privacy:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>UK GDPR & Data Protection Act 2018:</strong> Adhere to data
          protection principles, ensuring data is processed lawfully, fairly,
          and transparently.
        </li>
        <li>
          <strong>Safeguarding Standards:</strong> Follow school safeguarding
          policies and procedures, reporting any concerns to the DSL.
        </li>
        <li>
          <strong>Confidentiality:</strong> Maintain confidentiality and share
          information only with relevant staff on a need-to-know basis. Securely
          store all records related to the case.
        </li>
      </ul>

      <p className="mt-6">
        This guidance offers a framework. Teachers should adapt their approach
        based on individual circumstances. Consult with the DSL or school
        leadership for complex cases or further guidance.
      </p>
    </div>
  );
};

export default ParasocialRelationships;
