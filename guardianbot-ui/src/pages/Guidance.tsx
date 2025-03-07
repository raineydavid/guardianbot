import { useState, useMemo, useEffect } from "react";
import Layout from "@/components/Layout";
import AlertCard from "@/components/AlertCard";
import FilterControls, { FilterState } from "@/components/FilterControls";
import { useToast } from "@/components/ui/use-toast";
import {
  ShieldAlert,
  Check,
  Clock,
  AlertTriangle,
  AlertCircle,
  Info,
} from "lucide-react";
import { ChatAlert } from "@/types";
import { fetchAlerts, updateAlertReviewStatus } from "@/services/alertService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import GuidanceCard from "../components/GuidanceCard";
import { guidanceDocs } from "../data/guidanceDocs";

const Guidance = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Guidance</h1>
          <p className="text-muted-foreground">
            Suggested ways to help your child
          </p>
        </div>
        {guidanceDocs.map((guidance) => (
          <GuidanceCard
            guidanceTitle={guidance.title}
            Component={guidance.component}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Guidance;
