import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stats?: {
    label: string;
    value: string;
  }[];
  actionLabel?: string;
  onAction?: () => void;
  gradient?: boolean;
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  stats,
  actionLabel = "Open",
  onAction,
  gradient = false,
}: FeatureCardProps) => {
  return (
    <Card 
      className={cn(
        "group glass glass-hover p-6 cursor-pointer transition-all duration-300",
        gradient && "bg-gradient-to-br from-card to-card/50"
      )}
      onClick={onAction}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
          "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110"
        )}>
          <Icon className="h-6 w-6" />
        </div>
        {stats && stats.length > 0 && (
          <div className="flex gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-right">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full justify-center group-hover:bg-primary/10 group-hover:text-primary"
      >
        {actionLabel}
      </Button>
    </Card>
  );
};
