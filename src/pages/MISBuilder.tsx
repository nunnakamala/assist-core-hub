import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { BarChart3, PieChart, LineChart, TrendingUp, BarChart as BarChartIcon, Activity } from "lucide-react";
import { CreateReportDialog } from "@/components/MISBuilder/CreateReportDialog";
import { ReportCard } from "@/components/MISBuilder/ReportCard";
import { ReportViewDialog } from "@/components/MISBuilder/ReportViewDialog";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Report {
  id: string;
  name: string;
  type: string;
  chartType: string;
  lastUpdated: string;
  icon: any;
  description?: string;
  aiEnabled?: boolean;
  scheduled?: boolean;
  scheduleFrequency?: string;
  roleLevel?: string;
}

const MISBuilder = () => {
  const [reports, setReports] = useState<Report[]>([
    { 
      id: "1",
      name: "Daily Ticket Activity", 
      type: "Dashboard", 
      chartType: "bar",
      lastUpdated: "Auto-generated at 9:00 AM", 
      icon: BarChart3,
      description: "Daily overview of ticket creation, resolution, and agent activity",
      aiEnabled: true,
      scheduled: true,
      scheduleFrequency: "daily",
      roleLevel: "all"
    },
    { 
      id: "2",
      name: "SLA Performance", 
      type: "Report", 
      chartType: "line",
      lastUpdated: "Updated 5 mins ago", 
      icon: TrendingUp,
      description: "Track SLA compliance rates, breaches, and response times",
      aiEnabled: true,
      scheduled: true,
      scheduleFrequency: "hourly",
      roleLevel: "manager"
    },
    { 
      id: "3",
      name: "Ticket by Category", 
      type: "Chart", 
      chartType: "pie",
      lastUpdated: "Live data", 
      icon: PieChart,
      description: "Real-time breakdown: Hardware (35%), Software (28%), Network (22%), Access (15%)",
      aiEnabled: true,
      scheduled: false,
      roleLevel: "all"
    },
    { 
      id: "4",
      name: "Resolution Time Trends", 
      type: "Analytics", 
      chartType: "area",
      lastUpdated: "Weekly report", 
      icon: LineChart,
      description: "AI-powered analysis of ticket resolution patterns and bottlenecks",
      aiEnabled: true,
      scheduled: true,
      scheduleFrequency: "weekly",
      roleLevel: "admin"
    },
    { 
      id: "5",
      name: "Agent Performance", 
      type: "Dashboard", 
      chartType: "bar",
      lastUpdated: "Auto-generated at 9:00 AM", 
      icon: Activity,
      description: "Individual and team metrics: tickets resolved, avg response time, satisfaction scores",
      aiEnabled: true,
      scheduled: true,
      scheduleFrequency: "daily",
      roleLevel: "lead"
    },
  ]);

  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);

  const handleCreateReport = (newReport: {
    name: string;
    type: string;
    chartType: string;
    description: string;
    aiEnabled: boolean;
    scheduled: boolean;
    scheduleFrequency: string;
    roleLevel: string;
  }) => {
    const iconMap: { [key: string]: any } = {
      bar: BarChartIcon,
      line: LineChart,
      pie: PieChart,
      area: Activity,
      radar: TrendingUp,
    };

    const report: Report = {
      id: Date.now().toString(),
      ...newReport,
      lastUpdated: "Just now",
      icon: iconMap[newReport.chartType] || BarChart3,
    };

    setReports([report, ...reports]);
  };

  const handleViewReport = (report: Report) => {
    setSelectedReport(report);
    setViewDialogOpen(true);
  };

  const handleDeleteReport = (reportId: string) => {
    setReports(reports.filter((r) => r.id !== reportId));
    toast.success("Report deleted successfully");
  };

  const dashboards = reports.filter((r) => r.type === "Dashboard");
  const chartReports = reports.filter((r) => r.type === "Report" || r.type === "Chart");
  const analytics = reports.filter((r) => r.type === "Analytics");

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI MIS Builder</h1>
            <p className="text-muted-foreground">
              Automated report generation with AI insights, anomaly detection, and smart scheduling
            </p>
          </div>
          <CreateReportDialog onCreateReport={handleCreateReport} />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Reports ({reports.length})</TabsTrigger>
            <TabsTrigger value="dashboards">Dashboards ({dashboards.length})</TabsTrigger>
            <TabsTrigger value="charts">Charts & Reports ({chartReports.length})</TabsTrigger>
            <TabsTrigger value="analytics">Analytics ({analytics.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reports.map((report) => (
                <ReportCard
                  key={report.id}
                  name={report.name}
                  type={report.type}
                  lastUpdated={report.lastUpdated}
                  icon={report.icon}
                  onView={() => handleViewReport(report)}
                  onDelete={() => handleDeleteReport(report.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dashboards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboards.map((report) => (
                <ReportCard
                  key={report.id}
                  name={report.name}
                  type={report.type}
                  lastUpdated={report.lastUpdated}
                  icon={report.icon}
                  onView={() => handleViewReport(report)}
                  onDelete={() => handleDeleteReport(report.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="charts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chartReports.map((report) => (
                <ReportCard
                  key={report.id}
                  name={report.name}
                  type={report.type}
                  lastUpdated={report.lastUpdated}
                  icon={report.icon}
                  onView={() => handleViewReport(report)}
                  onDelete={() => handleDeleteReport(report.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analytics.map((report) => (
                <ReportCard
                  key={report.id}
                  name={report.name}
                  type={report.type}
                  lastUpdated={report.lastUpdated}
                  icon={report.icon}
                  onView={() => handleViewReport(report)}
                  onDelete={() => handleDeleteReport(report.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <ReportViewDialog
          open={viewDialogOpen}
          onOpenChange={setViewDialogOpen}
          report={selectedReport}
        />
      </div>
    </PageLayout>
  );
};

export default MISBuilder;
