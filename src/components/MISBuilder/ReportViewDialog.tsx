import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { BarChart3, LineChart, PieChart, TrendingUp, Calendar, Users, Clock } from "lucide-react";
import { BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AIInsightsPanel } from "./AIInsightsPanel";

interface ReportViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report: {
    name: string;
    type: string;
    chartType: string;
    lastUpdated?: string;
    description?: string;
    aiEnabled?: boolean;
    scheduled?: boolean;
    scheduleFrequency?: string;
    roleLevel?: string;
  } | null;
}

// Sample data for different charts - ticketing focused
const barData = [
  { name: "Mon", created: 87, resolved: 82, pending: 5 },
  { name: "Tue", created: 94, resolved: 89, pending: 10 },
  { name: "Wed", created: 76, resolved: 81, pending: 5 },
  { name: "Thu", created: 103, resolved: 98, pending: 15 },
  { name: "Fri", created: 91, resolved: 86, pending: 20 },
  { name: "Sat", created: 42, resolved: 38, pending: 24 },
  { name: "Sun", created: 28, resolved: 31, pending: 21 },
];

const lineData = [
  { month: "Jan", slaCompliance: 89, target: 95, avgResolutionHrs: 4.2 },
  { month: "Feb", slaCompliance: 92, target: 95, avgResolutionHrs: 3.8 },
  { month: "Mar", slaCompliance: 87, target: 95, avgResolutionHrs: 4.5 },
  { month: "Apr", slaCompliance: 94, target: 95, avgResolutionHrs: 3.5 },
  { month: "May", slaCompliance: 96, target: 95, avgResolutionHrs: 3.2 },
  { month: "Jun", slaCompliance: 94, target: 95, avgResolutionHrs: 3.6 },
];

const pieData = [
  { name: "Hardware Issues", value: 145, color: "hsl(var(--chart-1))" },
  { name: "Software Support", value: 116, color: "hsl(var(--chart-2))" },
  { name: "Network Problems", value: 91, color: "hsl(var(--chart-3))" },
  { name: "Access Requests", value: 62, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 38, color: "hsl(var(--chart-5))" },
];

const areaData = [
  { time: "Week 1", avgHours: 4.5, critical: 2, high: 8, medium: 15, low: 25 },
  { time: "Week 2", avgHours: 4.2, critical: 3, high: 7, medium: 18, low: 22 },
  { time: "Week 3", avgHours: 3.8, critical: 1, high: 9, medium: 16, low: 24 },
  { time: "Week 4", avgHours: 3.5, critical: 2, high: 6, medium: 17, low: 25 },
];

const chartConfig = {
  created: { label: "Created", color: "hsl(var(--primary))" },
  resolved: { label: "Resolved", color: "hsl(var(--chart-2))" },
  pending: { label: "Pending", color: "hsl(var(--warning))" },
  slaCompliance: { label: "SLA %", color: "hsl(var(--primary))" },
  target: { label: "Target", color: "hsl(var(--chart-3))" },
  avgResolutionHrs: { label: "Avg Hours", color: "hsl(var(--chart-4))" },
  avgHours: { label: "Avg Resolution Time", color: "hsl(var(--primary))" },
};

export const ReportViewDialog = ({ open, onOpenChange, report }: ReportViewDialogProps) => {
  if (!report) return null;

  const renderChart = () => {
    switch (report.chartType) {
      case "bar":
        return (
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="created" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="resolved" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="hsl(var(--warning))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        );

      case "line":
        return (
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="slaCompliance" stroke="hsl(var(--primary))" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="hsl(var(--chart-3))" strokeWidth={2} strokeDasharray="5 5" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </ChartContainer>
        );

      case "pie":
        return (
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </ChartContainer>
        );

      case "area":
        return (
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="time" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="avgHours" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        );

      default:
        return (
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Chart type not supported
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl flex items-center gap-2">
                {report.name}
                {report.aiEnabled && (
                  <Badge variant="secondary" className="gap-1">
                    <BarChart3 className="h-3 w-3" />
                    AI-Powered
                  </Badge>
                )}
                {report.scheduled && (
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Auto-Generated
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription className="mt-2 space-y-1">
                <div>{report.type} • {report.lastUpdated || "Just created"}</div>
                {report.description && (
                  <div className="text-sm">{report.description}</div>
                )}
                {report.roleLevel && report.roleLevel !== "all" && (
                  <Badge variant="outline" className="gap-1 mt-1">
                    <Users className="h-3 w-3" />
                    {report.roleLevel.charAt(0).toUpperCase() + report.roleLevel.slice(1)} View
                  </Badge>
                )}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-6">
          {renderChart()}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-4 w-4 text-primary" />
              <p className="text-sm text-muted-foreground">Total Tickets</p>
            </div>
            <p className="text-2xl font-bold text-gradient">2,456</p>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-success" />
              <p className="text-sm text-muted-foreground">Resolved</p>
            </div>
            <p className="text-2xl font-bold text-success">94.2%</p>
            <p className="text-xs text-muted-foreground mt-1">+5.3% vs last month</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-primary" />
              <p className="text-sm text-muted-foreground">Avg Resolution</p>
            </div>
            <p className="text-2xl font-bold text-gradient">3.6 hrs</p>
            <p className="text-xs text-success mt-1">-18% improvement</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-primary" />
              <p className="text-sm text-muted-foreground">Active Agents</p>
            </div>
            <p className="text-2xl font-bold text-gradient">42/45</p>
            <p className="text-xs text-muted-foreground mt-1">93% utilization</p>
          </div>
        </div>

        {report.aiEnabled && (
          <div className="mt-6">
            <AIInsightsPanel reportType={report.chartType} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
