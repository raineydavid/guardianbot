import { ReactNode, useState } from "react";
import { ChatAlert } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, ChevronUp, Eye, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import AlertBadge from "./AlertBadge";
import ChatHistory from "./ChatHistory";

interface GuidanceCardProps {
  guidanceTitle: string;
  Component: () => JSX.Element;
}

const GuidanceCard = ({ guidanceTitle, Component }: GuidanceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full mb-4 transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              {guidanceTitle}
            </CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5 mr-1" /> Hide
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5 mr-1" /> View
              </>
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">{isExpanded && <Component />}</CardContent>
    </Card>
  );
};

export default GuidanceCard;
