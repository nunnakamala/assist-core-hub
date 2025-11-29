import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, BarChart3, PieChart, LineChart, TrendingUp } from "lucide-react";

const MISBuilder = () => {
  const reports = [
    { name: "SLA Compliance", type: "Dashboard", lastUpdated: "2 hours ago", icon: BarChart3 },
    { name: "Team Performance", type: "Report", lastUpdated: "1 day ago", icon: TrendingUp },
    { name: "Ticket Distribution", type: "Chart", lastUpdated: "3 hours ago", icon: PieChart },
    { name: "Resolution Trends", type: "Analytics", lastUpdated: "5 hours ago", icon: LineChart },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">MIS Builder</h1>
            <p className="text-muted-foreground">Create dashboards, charts, and custom reports</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <report.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{report.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{report.type}</p>
              <p className="text-xs text-muted-foreground">Updated {report.lastUpdated}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default MISBuilder;
