import React from "react";

const MentalHealthConcerns = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        GuardianBot: Guidance for Teachers - Addressing Potential Mental Health
        Concerns (Students Aged 5-15)
      </h1>
      <p className="mb-4">
        This guidance outlines the steps teachers should take when GuardianBot
        flags a potential mental health concern, whether related to AI chatbot
        use or other factors. It prioritizes student well-being, open
        communication, and adherence to UK safeguarding standards.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        I. Immediate Actions & Teacher Responsibilities:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Review the Alert:</strong> Understand the nature of the
          flagged concern. This might include changes in behaviour, emotional
          distress signals, or specific AI-related interactions.
        </li>
        <li>
          <strong>Private Conversation:</strong> Arrange a private,
          non-judgmental conversation with the student in a safe and comfortable
          environment.
          <ul className="list-disc pl-6">
            <li>
              <strong>Younger Students (5-9):</strong> "How are you feeling
              today?" "Is anything bothering you?" "Are you having fun at
              school?" Use drawings or simple activities to help them express
              themselves.
            </li>
            <li>
              <strong>Older Students (10-15):</strong> "I've noticed you seem a
              little [down/stressed/different lately]. Is everything okay?" "Is
              there anything you'd like to talk about?" Emphasize
              confidentiality and reassure them that seeking help is a sign of
              strength.
            </li>
          </ul>
        </li>
        <li>
          <strong>Immediate Safeguarding Concerns:</strong> If the conversation
          reveals immediate risks of harm (e.g., self-harm, suicidal ideation),
          immediately inform the Designated Safeguarding Lead (DSL) and follow
          school safeguarding procedures.
        </li>
        <li>
          <strong>Documentation:</strong> Keep a confidential record of the
          conversation, including date, time, key observations, and actions
          taken.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        II. Appropriate Escalation & Support Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Consult with DSL:</strong> The DSL will advise on further
          action, including potential involvement of external agencies
          (Children's Social Care, CAMHS).
        </li>
        <li>
          <strong>School Counselor/Pastoral Support:</strong> Refer the student
          to the school counselor or pastoral lead for ongoing support.
        </li>
        <li>
          <strong>External Mental Health Professionals:</strong> With parental
          consent, consider referral to local mental health services,
          educational psychologists, or specialist organizations (e.g.,
          YoungMinds, Place2Be).
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
              <strong>Younger Students:</strong> Reassure them that you care and
              are there to help. Explain that talking about feelings is
              important.
            </li>
            <li>
              <strong>Older Students:</strong> Explain the importance of mental
              well-being and the availability of support. Discuss
              confidentiality and the process of seeking help.
            </li>
          </ul>
        </li>
        <li>
          <strong>Communication with Parents/Guardians:</strong>
          <p>
            "We've noticed some changes in [student's name]'s
            behaviour/emotional well-being, and we're concerned. We'd like to
            discuss this with you and explore ways to support [him/her]. We may
            also recommend seeking advice from external mental health
            professionals." Avoid making assumptions about the cause of the
            concern.
          </p>
        </li>
        <li>
          <strong>Stakeholder Engagement:</strong> Keep relevant staff (SLT,
          counselors, pastoral team) and external agencies (if involved)
          informed while respecting data privacy.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        IV. Preventive & Educational Measures:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Mental Health & Well-being Curriculum:</strong> Integrate
          age-appropriate lessons on mental health, emotional literacy, and
          coping strategies.
        </li>
        <li>
          <strong>E-Safety & Digital Well-being:</strong> Teach students about
          healthy technology use, balancing online and offline activities, and
          recognizing the limitations of AI.
        </li>
        <li>
          <strong>Proactive Monitoring:</strong> Encourage open communication
          and create a supportive classroom environment where students feel
          comfortable expressing their feelings.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        V. Compliance & Data Privacy:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>UK GDPR & Data Protection Act 2018:</strong> Adhere to data
          protection principles, ensuring lawful, fair, and transparent data
          processing. Obtain parental consent for sharing information with
          external agencies.
        </li>
        <li>
          <strong>Safeguarding Standards:</strong> Follow school safeguarding
          policies and procedures. Report concerns to the DSL.
        </li>
        <li>
          <strong>Confidentiality & Record-Keeping:</strong> Maintain
          confidentiality, store records securely, and document all referrals
          and communications.
        </li>
      </ul>

      <p className="mt-6">
        This guidance is a framework. Teachers should adapt their approach based
        on individual needs. Consult with the DSL or school leadership for
        complex cases.
      </p>
    </div>
  );
};

export default MentalHealthConcerns;
