import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Database, Brain, TrendingUp, Target } from "lucide-react";

const DataAnalytics = () => {
  const insights = [
    { name: "Recurring Issue Prediction", accuracy: "92%", insights: 45, icon: Brain },
    { name: "Bottleneck Detection", accuracy: "88%", insights: 23, icon: Target },
    { name: "Resource Optimization", accuracy: "95%", insights: 67, icon: TrendingUp },
    { name: "Pattern Analysis", accuracy: "90%", insights: 34, icon: Database },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Data Analytics</h1>
            <p className="text-muted-foreground">Predict issues, identify bottlenecks, optimize resources</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Analysis
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <insight.icon className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-gradient">{insight.accuracy}</span>
              </div>
              <h3 className="font-semibold mb-2">{insight.name}</h3>
              <p className="text-sm text-muted-foreground">{insight.insights} insights generated</p>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default DataAnalytics;
