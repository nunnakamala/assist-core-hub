import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

interface AIInsightsPanelProps {
  reportType: string;
}

export const AIInsightsPanel = ({ reportType }: AIInsightsPanelProps) => {
  return (
    <Card className="glass p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">AI-Generated Insights</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
          <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Positive Trend Detected</p>
            <p className="text-sm text-muted-foreground">
              Ticket resolution time improved by 18% compared to last week. Great job team!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
          <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Anomaly Detected</p>
            <p className="text-sm text-muted-foreground">
              Unusual spike in network-related tickets today (35 vs avg 12). May require attention.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
          <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Performance Summary</p>
            <p className="text-sm text-muted-foreground">
              Overall system health is excellent. 94% of tickets resolved within SLA timeframe.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border space-y-2">
        <p className="text-sm font-medium">Smart Recommendations</p>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Consider adding more staff during peak hours (2-4 PM)</li>
          <li>Network issues trending up - schedule infrastructure review</li>
          <li>High-priority tickets average 2.3 reassignments - optimize routing</li>
        </ul>
      </div>
    </Card>
  );
};
