import React from "react";

const AIPlagiarism = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        GuardianBot: Guidance for Teachers - Addressing AI-Assisted Plagiarism
        (Students Aged 5-15)
      </h1>
      <p className="mb-4">
        This guidance outlines the steps teachers should take when GuardianBot
        flags potential AI-assisted plagiarism. It emphasizes educational
        interventions and open communication with students and parents.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        I. Initial Steps (Post-Flagging by GuardianBot):
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Verify the Flag:</strong> Review the flagged work alongside
          the student's previous submissions and classroom performance. Look for
          inconsistencies in style, vocabulary, or understanding. Do not assume
          the flag automatically equates to plagiarism.
        </li>
        <li>
          <strong>Private Conversation with the Student:</strong> Arrange a
          private and non-confrontational meeting with the student. The aim is
          to understand <em>how</em> the work was completed, not to accuse.
          <ul className="list-disc pl-6">
            <li>
              "Can you tell me about how you researched and wrote this
              assignment?"
            </li>
            <li>
              "This section seems different from your usual writing. Can you
              explain your process here?"
            </li>
            <li>
              "(For younger students) Did you get any help with this homework?"
            </li>
          </ul>
        </li>
        <li>
          <strong>Gather Information:</strong> Determine if the student used an
          AI chatbot:
          <ul className="list-disc pl-6">
            <li>If they admit to using AI: Proceed to Step 4.</li>
            <li>
              If they deny using AI but you remain suspicious after further
              investigation: Document your concerns and consult with your Head
              of Department/Year. Do <em>not</em> directly accuse the student
              without clear evidence.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        II. Addressing AI Use & Educating the Student:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Explain Academic Integrity:</strong> Regardless of admission,
          use this opportunity to educate the student about plagiarism and
          appropriate research practices. Explain why using AI chatbots to
          complete assignments undermines learning and academic integrity.
          <ul className="list-disc pl-6">
            <li>Owning your work.</li>
            <li>The value of learning and developing skills.</li>
            <li>Citing sources and acknowledging help.</li>
          </ul>
        </li>
        <li>
          <strong>Consequences & Restorative Approach:</strong> Explain the
          school's policy on plagiarism (e.g., rewriting the assignment, reduced
          grade). Emphasize a restorative approach focused on learning from the
          mistake and developing good academic practices.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        III. Communicating with Parents:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Inform Parents:</strong> Contact parents/guardians to explain
          the situation. Focus on the school's commitment to academic integrity
          and supporting the student's learning. Avoid accusatory language.
          <p>
            "We've noticed [student's name] may have used an AI tool
            inappropriately for their [subject] assignment. We're working with
            [him/her] to understand proper research methods and ensure future
            work meets our academic integrity standards."
          </p>
        </li>
        <li>
          <strong>Joint Discussion (if necessary):</strong> If the situation is
          complex or recurring, arrange a meeting with the student, parents, and
          teacher to discuss strategies for supporting the student's learning
          and responsible technology use.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        IV. Prevention and Education:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Curriculum Integration:</strong> Incorporate lessons on
          digital literacy, ethical AI use, and academic integrity into the
          curriculum across all subjects.
        </li>
        <li>
          <strong>Parent Workshops:</strong> Offer workshops to educate parents
          about AI tools, their potential misuse, and strategies for supporting
          responsible technology use at home.
        </li>
        <li>
          <strong>Clear School Policy:</strong> Ensure the school's Acceptable
          Use Policy (AUP) explicitly addresses AI chatbot usage for academic
          work. Make the policy accessible to students and parents.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        V. Data Privacy Considerations:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          All discussions and actions regarding suspected AI plagiarism must
          adhere to the UK GDPR and Data Protection Act 2018.
        </li>
        <li>
          Ensure appropriate data security measures are in place within
          GuardianBot and related systems.
        </li>
        <li>
          Only collect and process data necessary for addressing academic
          integrity concerns.
        </li>
      </ul>

      <p className="mt-6">
        This guidance is designed to be a supportive framework. Teachers should
        adapt their approach based on the individual student's age, maturity
        level, and specific circumstances. Consult with school leadership for
        complex cases or further guidance.
      </p>
    </div>
  );
};

export default AIPlagiarism;
