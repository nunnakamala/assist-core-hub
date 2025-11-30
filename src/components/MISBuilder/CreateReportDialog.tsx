import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Sparkles, Plus } from "lucide-react";
import { toast } from "sonner";

interface CreateReportDialogProps {
  onCreateReport: (report: {
    name: string;
    type: string;
    chartType: string;
    description: string;
    aiEnabled: boolean;
    scheduled: boolean;
    scheduleFrequency: string;
    roleLevel: string;
  }) => void;
}

export const CreateReportDialog = ({ onCreateReport }: CreateReportDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [chartType, setChartType] = useState("");
  const [description, setDescription] = useState("");
  const [aiEnabled, setAiEnabled] = useState(true);
  const [scheduled, setScheduled] = useState(false);
  const [scheduleFrequency, setScheduleFrequency] = useState("daily");
  const [roleLevel, setRoleLevel] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !type || !chartType) {
      toast.error("Please fill in all required fields");
      return;
    }

    onCreateReport({ 
      name, 
      type, 
      chartType, 
      description,
      aiEnabled,
      scheduled,
      scheduleFrequency,
      roleLevel
    });
    toast.success("AI-powered report created successfully!");
    
    // Reset form
    setName("");
    setType("");
    setChartType("");
    setDescription("");
    setAiEnabled(true);
    setScheduled(false);
    setScheduleFrequency("daily");
    setRoleLevel("all");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          Create AI Report
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create AI-Powered Report</DialogTitle>
          <DialogDescription>
            Configure automated report generation with AI insights and scheduling
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Report Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Daily Ticket Activity Report"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Report Category *</Label>
            <Select value={type} onValueChange={setType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dashboard">Performance Dashboard</SelectItem>
                <SelectItem value="Report">Detailed Report</SelectItem>
                <SelectItem value="Chart">Visual Chart</SelectItem>
                <SelectItem value="Analytics">AI Analytics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="roleLevel">Target Role Level *</Label>
            <Select value={roleLevel} onValueChange={setRoleLevel} required>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">IT Admin</SelectItem>
                <SelectItem value="manager">Team Manager</SelectItem>
                <SelectItem value="lead">Team Lead</SelectItem>
                <SelectItem value="agent">Support Agent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chartType">Chart Type *</Label>
            <Select value={chartType} onValueChange={setChartType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select chart type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="pie">Pie Chart</SelectItem>
                <SelectItem value="area">Area Chart</SelectItem>
                <SelectItem value="radar">Radar Chart</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what this report will track..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div className="glass p-4 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <Label htmlFor="ai-enabled" className="font-semibold">AI-Powered Insights</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically detect anomalies and generate natural language summaries
                </p>
              </div>
              <Switch
                id="ai-enabled"
                checked={aiEnabled}
                onCheckedChange={setAiEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="scheduled" className="font-semibold">Scheduled Generation</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically generate this report at specified intervals
                </p>
              </div>
              <Switch
                id="scheduled"
                checked={scheduled}
                onCheckedChange={setScheduled}
              />
            </div>

            {scheduled && (
              <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                <Label htmlFor="frequency">Generation Frequency</Label>
                <Select value={scheduleFrequency} onValueChange={setScheduleFrequency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Every Hour</SelectItem>
                    <SelectItem value="daily">Daily at 9 AM</SelectItem>
                    <SelectItem value="weekly">Weekly on Monday</SelectItem>
                    <SelectItem value="monthly">Monthly on 1st</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="gap-2">
              <Plus className="h-4 w-4" />
              Create Report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
