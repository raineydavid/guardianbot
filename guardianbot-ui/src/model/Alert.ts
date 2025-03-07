export interface Alert {
  id: string;
  childId: string;
  childName: string;
  sessionStart?: number;
  sessionEnd?: number;
  topic: string;
  chatHistory: string;
  alertReason: string;
}
