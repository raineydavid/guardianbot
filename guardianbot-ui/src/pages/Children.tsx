import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { useToast } from "@/components/ui/use-toast";
import {
  UserRound,
  MessageSquare,
  AlertTriangle,
  Clock,
  Check,
  Search,
  Filter,
  AlertCircle,
} from "lucide-react";
import { ChatAlert } from "@/types";
import { fetchAlerts } from "@/services/alertService";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ChildMetrics {
  childId: number | null;
  childName: string | null;
  totalChats: number;
  totalAlerts: number;
  pendingAlerts: number;
  highSeverityAlerts: number;
  reviewedAlerts: number;
  lastActive: string;
}

const Children = () => {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    search: "",
    severity: ["high", "medium", "low"] as string[],
  });

  // Fetch alerts using React Query
  const {
    data: alerts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["alerts"],
    queryFn: fetchAlerts,
    refetchInterval: 5000,
  });

  // Calculate child metrics
  const childMetrics = useMemo(() => {
    const metrics: { [key: number | null]: ChildMetrics } = {};

    alerts.forEach((alert) => {
      if (!metrics[alert.childId]) {
        metrics[alert.childId] = {
          childId: alert.childId,
          childName: alert.childName,
          totalChats: 0,
          totalAlerts: 0,
          pendingAlerts: 0,
          highSeverityAlerts: 0,
          reviewedAlerts: 0,
          lastActive: alert.timestamp,
        };
      }

      const child = metrics[alert.childId];
      child.totalChats += alert.conversation.length;
      child.totalAlerts += 1;
      if (!alert.reviewed) child.pendingAlerts += 1;
      if (alert.severity === "high") child.highSeverityAlerts += 1;
      if (alert.reviewed) child.reviewedAlerts += 1;
      if (new Date(alert.timestamp) > new Date(child.lastActive)) {
        child.lastActive = alert.timestamp;
      }
    });

    return Object.values(metrics);
  }, [alerts]);

  const filteredChildren = useMemo(() => {
    return childMetrics.filter((child) => {
      const searchMatch =
        filters.search === "" ||
        child.childName?.toLowerCase().includes(filters.search.toLowerCase()) ||
        child.childId?.toString().includes(filters.search);

      const severityMatch =
        filters.severity.length === 3 ||
        (filters.severity.includes("high") && child.highSeverityAlerts > 0) ||
        (filters.severity.includes("medium") &&
          child.totalAlerts - child.highSeverityAlerts > 0) ||
        (filters.severity.includes("low") && child.totalAlerts === 0);

      return searchMatch && severityMatch;
    });
  }, [childMetrics, filters]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Children Overview</h1>
          <p className="text-muted-foreground">
            Monitor and manage children's AI interaction metrics
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="mb-4 flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Children's Activity</h2>
            <p className="text-sm text-muted-foreground">
              View and filter children's AI interaction metrics
            </p>
          </div>

          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by child name or ID..."
                className="pl-9"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium flex items-center gap-1.5">
                <Filter className="h-3.5 w-3.5" /> Show children with:
              </label>
              <ToggleGroup
                type="multiple"
                value={filters.severity}
                onValueChange={(value) =>
                  setFilters({ ...filters, severity: value })
                }
                className="justify-start"
              >
                <ToggleGroupItem
                  value="high"
                  className="px-2 py-1 h-auto data-[state=on]:bg-red-100 data-[state=on]:text-red-800 dark:data-[state=on]:bg-red-900/30 dark:data-[state=on]:text-red-300"
                >
                  <AlertTriangle className="h-3.5 w-3.5 mr-1" />
                  High Severity
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="medium"
                  className="px-2 py-1 h-auto data-[state=on]:bg-amber-100 data-[state=on]:text-amber-800 dark:data-[state=on]:bg-amber-900/30 dark:data-[state=on]:text-amber-300"
                >
                  <AlertCircle className="h-3.5 w-3.5 mr-1" />
                  Medium Severity
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="low"
                  className="px-2 py-1 h-auto data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800 dark:data-[state=on]:bg-blue-900/30 dark:data-[state=on]:text-blue-300"
                >
                  <Check className="h-3.5 w-3.5 mr-1" />
                  No Alerts
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <p>Loading children's data...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-red-100 p-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-medium mb-1">Error loading data</h3>
              <p className="text-sm text-muted-foreground">
                There was a problem fetching the children's data
              </p>
            </div>
          ) : filteredChildren.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredChildren.map((child) => (
                <div
                  key={child.childId || 'unknown'}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <UserRound className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{child.childName || 'Unknown Child'}</h3>
                      <p className="text-sm text-muted-foreground">
                        Last active:{" "}
                        {new Date(child.lastActive).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Total Chats</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">
                        {child.totalChats}
                      </p>
                    </div>

                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium">High Severity</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">
                        {child.highSeverityAlerts}
                      </p>
                    </div>

                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Pending</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">
                        {child.pendingAlerts}
                      </p>
                    </div>

                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Reviewed</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">
                        {child.reviewedAlerts}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-3 mb-3">
                <Check className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1">No children match your filters</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filter criteria to see more results
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Children; 