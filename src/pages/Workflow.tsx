import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, GitBranch, Zap, Timer, TrendingUp } from "lucide-react";

const Workflow = () => {
  const workflows = [
    { name: "Ticket Auto-Assignment", status: "Active", executions: 234, icon: GitBranch },
    { name: "SLA Escalation", status: "Active", executions: 89, icon: Timer },
    { name: "Approval Flow", status: "Draft", executions: 0, icon: Zap },
    { name: "Priority Routing", status: "Active", executions: 456, icon: TrendingUp },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Workflow Creator</h1>
            <p className="text-muted-foreground">Design automated workflows with drag-and-drop</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Workflow
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflows.map((workflow, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <workflow.icon className="h-6 w-6" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  workflow.status === 'Active' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {workflow.status}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{workflow.name}</h3>
              <p className="text-sm text-muted-foreground">{workflow.executions} executions</p>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Workflow;
