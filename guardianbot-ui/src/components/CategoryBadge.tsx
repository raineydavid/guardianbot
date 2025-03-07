import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useCallback } from "react";
import { Category } from "../types";

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

const transform = (category: Category) => {
  switch (category) {
    case "Bullying":
      return "Mental Health Concerns";
    case "Inappropriate":
      return "Inappropriate Content";
    default:
      return category;
  }
};

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  const handleClick = useCallback(() => {
    console.log("zzz clicked");
  }, []);

  return (
    <Badge
      className={cn("flex items-center", "bg-alert-low text-white", className)}
      onClick={handleClick}
    >
      {transform(category)}
    </Badge>
  );
};

export default CategoryBadge;
