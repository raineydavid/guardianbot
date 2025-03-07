import React from "react";

const SensitiveDisclosure = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        GuardianBot: Guidance for Teachers - Addressing Disclosure of Sensitive
        Information via AI Chatbots (Students Aged 5-15)
      </h1>
      <p className="mb-4">
        This guidance outlines the steps teachers should take when GuardianBot
        flags the disclosure of sensitive information by a student during AI
        chatbot interactions. It prioritizes student safety, privacy, and open
        communication, in line with UK safeguarding standards.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        I. Immediate Actions & Teacher Responsibilities:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Review Flagged Conversation:</strong> Carefully assess the
          nature and sensitivity of the disclosed information (personal details,
          family matters, location, etc.).
        </li>
        <li>
          <strong>Initial Conversation (Age-Appropriate):</strong> Arrange a
          private, non-judgmental conversation with the student.
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students (5-9):</strong> "I noticed you were
              talking to the chatbot about [topic]. Can you tell me more about
              that?" "Who are the people you trust to talk to about private
              things?"
            </li>
            <li>
              <strong>Older Students (10-15):</strong> "I've noticed you shared
              some personal information with the chatbot. Can you help me
              understand why you felt comfortable doing that?" "Do you
              understand the potential risks of sharing this kind of information
              online?"
            </li>
          </ul>
        </li>
        <li>
          <strong>Document Concerns:</strong> Keep a confidential, factual
          record of the conversation, the nature of the disclosed information,
          and the student's response. Avoid speculation or judgment.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        II. Appropriate Escalation & Support Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Inform Designated Safeguarding Lead (DSL):</strong>{" "}
          Immediately inform the DSL if the disclosed information suggests a
          risk of harm to the student or others (e.g., abuse, neglect,
          exploitation, radicalization), or if you have any other safeguarding
          concerns.
        </li>
        <li>
          <strong>External Agency Involvement:</strong> The DSL will determine
          if external agencies (Children's Social Care, police) need to be
          involved. Follow school safeguarding procedures.
        </li>
        <li>
          <strong>Counseling/Support:</strong> If the student exhibits emotional
          distress or anxiety, refer them to the school counselor or other
          support services.
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
              <strong>Younger Students:</strong> Explain in simple terms why
              sharing personal information online is unsafe, using analogies
              like "stranger danger" and emphasizing the importance of talking
              to trusted adults.
            </li>
            <li>
              <strong>Older Students:</strong> Discuss online privacy, data
              security, digital footprints, and the potential consequences of
              sharing sensitive information. Emphasize critical thinking and
              responsible online behaviour.
            </li>
          </ul>
        </li>
        <li>
          <strong>Communication with Parents/Guardians:</strong>
          <p>
            "We've noticed that [student's name] shared some personal
            information during a chatbot interaction. We want to partner with
            you to reinforce online safety practices at home and school. We've
            discussed this with [student's name] and encouraged [him/her] to be
            mindful of online privacy." Remain supportive and avoid blaming.
          </p>
        </li>
        <li>
          <strong>Stakeholder Engagement:</strong> Keep relevant staff (DSL,
          counselors, senior leadership) informed, ensuring a consistent and
          coordinated response.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        IV. Preventive & Educational Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Digital Literacy & Online Safety Curriculum:</strong>{" "}
          Integrate age-appropriate lessons on online privacy, data security,
          responsible use of AI, and recognizing sensitive information.
        </li>
        <li>
          <strong>E-Safety Assemblies/Workshops:</strong> Reinforce school
          values related to privacy, respect, and responsible digital
          citizenship. Engage external speakers or online safety experts.
        </li>
        <li>
          <strong>Parent Awareness Sessions:</strong> Educate parents about
          online safety risks, strategies for monitoring children's online
          activities, and open communication about digital well-being.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        V. Compliance & Data Privacy:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>UK GDPR & Data Protection Act 2018:</strong> Adhere to data
          protection principles. Ensure data is processed lawfully, fairly, and
          transparently. Obtain parental consent before sharing information with
          external agencies (unless legal obligations require otherwise).
        </li>
        <li>
          <strong>Safeguarding Standards:</strong> Strictly adhere to school
          safeguarding policies. Report any concerns to the DSL.
        </li>
        <li>
          <strong>Confidentiality & Data Security:</strong> Securely store all
          flagged conversations and related records. Restrict access to
          authorized personnel only. Follow data retention policies.
        </li>
      </ul>

      <p className="mt-6">
        This guidance offers a framework. Teachers should adapt their approach
        to individual student needs and specific circumstances. Consult with the
        DSL or school leadership for complex cases or further guidance.
      </p>
    </div>
  );
};

export default SensitiveDisclosure;
