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
}

const MISBuilder = () => {
  const [reports, setReports] = useState<Report[]>([
    { 
      id: "1",
      name: "SLA Compliance", 
      type: "Dashboard", 
      chartType: "bar",
      lastUpdated: "2 hours ago", 
      icon: BarChart3,
      description: "Monitor service level agreement compliance across teams"
    },
    { 
      id: "2",
      name: "Team Performance", 
      type: "Report", 
      chartType: "line",
      lastUpdated: "1 day ago", 
      icon: TrendingUp,
      description: "Track team performance metrics and trends"
    },
    { 
      id: "3",
      name: "Ticket Distribution", 
      type: "Chart", 
      chartType: "pie",
      lastUpdated: "3 hours ago", 
      icon: PieChart,
      description: "Analyze ticket distribution by category"
    },
    { 
      id: "4",
      name: "Resolution Trends", 
      type: "Analytics", 
      chartType: "area",
      lastUpdated: "5 hours ago", 
      icon: LineChart,
      description: "View resolution time trends over time"
    },
  ]);

  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);

  const handleCreateReport = (newReport: {
    name: string;
    type: string;
    chartType: string;
    description: string;
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
            <h1 className="text-3xl font-bold mb-2">MIS Builder</h1>
            <p className="text-muted-foreground">Create dashboards, charts, and custom reports</p>
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
