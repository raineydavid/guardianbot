export type AlertSeverity = "low" | "medium" | "high";
export type Category = "Plagiarism" | "Inappropriate" | "Bullying";

export interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
  flagged?: boolean;
  flagReason?: string;
}

export interface ChatAlert {
  id: number;
  childName: string | null;
  childId: number | null;
  aiPlatform: string;
  severity: AlertSeverity;
  timestamp: string;
  flaggedMessage: Message;
  conversation: Message[];
  reviewed: boolean;
  category?: Category;
}
