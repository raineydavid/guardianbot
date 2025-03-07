import ExcessiveAIGuidance from "../components/guidances/Excessive_AI";
import InappropriateContent from "../components/guidances/Inappropriate_Content";
import MentalHealthConcerns from "../components/guidances/Mental_Health";
import ParasocialRelationships from "../components/guidances/Parasocial";
import AIPlagiarism from "../components/guidances/Plagiarism";
import SensitiveDisclosure from "../components/guidances/Sensitive";

export const guidanceDocs: { title: string; component: () => JSX.Element }[] = [
  {
    title: "Excessive AI",
    component: ExcessiveAIGuidance,
  },
  {
    title: "Inappropriate Content",
    component: InappropriateContent,
  },
  { title: "Mental Health Concerns", component: MentalHealthConcerns },
  { title: "Parasocial Relationships", component: ParasocialRelationships },
  { title: "Plagiarism", component: AIPlagiarism },
  { title: "Sensitive Information Disclosure", component: SensitiveDisclosure },
];
