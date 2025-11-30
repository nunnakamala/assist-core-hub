import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";
import { BarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface ReportViewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report: {
    name: string;
    type: string;
    chartType: string;
    lastUpdated?: string;
  } | null;
}

// Sample data for different charts
const barData = [
  { name: "Mon", tickets: 45, resolved: 38 },
  { name: "Tue", tickets: 52, resolved: 48 },
  { name: "Wed", tickets: 38, resolved: 35 },
  { name: "Thu", tickets: 61, resolved: 55 },
  { name: "Fri", tickets: 48, resolved: 42 },
  { name: "Sat", tickets: 25, resolved: 23 },
  { name: "Sun", tickets: 18, resolved: 16 },
];

const lineData = [
  { month: "Jan", performance: 85, target: 90 },
  { month: "Feb", performance: 88, target: 90 },
  { month: "Mar", performance: 82, target: 90 },
  { month: "Apr", performance: 92, target: 90 },
  { month: "May", performance: 95, target: 90 },
  { month: "Jun", performance: 91, target: 90 },
];

const pieData = [
  { name: "Hardware", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Software", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Network", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Access", value: 15, color: "hsl(var(--chart-4))" },
];

const areaData = [
  { time: "00:00", incidents: 5 },
  { time: "04:00", incidents: 3 },
  { time: "08:00", incidents: 15 },
  { time: "12:00", incidents: 25 },
  { time: "16:00", incidents: 18 },
  { time: "20:00", incidents: 10 },
  { time: "24:00", incidents: 6 },
];

const chartConfig = {
  tickets: { label: "Tickets", color: "hsl(var(--primary))" },
  resolved: { label: "Resolved", color: "hsl(var(--chart-2))" },
  performance: { label: "Performance", color: "hsl(var(--primary))" },
  target: { label: "Target", color: "hsl(var(--chart-3))" },
  incidents: { label: "Incidents", color: "hsl(var(--primary))" },
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
                <Bar dataKey="tickets" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="resolved" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
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
                <Line type="monotone" dataKey="performance" stroke="hsl(var(--primary))" strokeWidth={2} />
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
                <Area type="monotone" dataKey="incidents" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{report.name}</DialogTitle>
          <DialogDescription>
            {report.type} • {report.lastUpdated || "Just created"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          {renderChart()}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Total Records</p>
            <p className="text-2xl font-bold text-gradient">1,248</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Average</p>
            <p className="text-2xl font-bold text-gradient">87.5%</p>
          </div>
          <div className="glass p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Trend</p>
            <p className="text-2xl font-bold text-success">+12.3%</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
