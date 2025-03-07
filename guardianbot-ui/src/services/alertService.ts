import { mockAlerts } from "../data/mockData";
import { supabase } from "../integrations/supabase/client";
import { AlertSeverity, ChatAlert, Message } from "../types";

export const fetchAlerts = async (): Promise<ChatAlert[]> => {
  try {
    const { data, error } = await supabase.from("Alert").select("*");

    if (error) {
      console.error("Error fetching alerts:", error);
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch alerts:", error);
    return [];
  }
};

// Function to update the review status of an alert
export const updateAlertReviewStatus = async (
  id: string,
  reviewed: boolean
) => {
  try {
    const { error } = await supabase
      .from("Alert")
      .update({ reviewed })
      .eq("id", id);
    if (error) {
      console.error("Error updating alert review status:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Failed to update alert review status:", error);
    return false;
  }
};
