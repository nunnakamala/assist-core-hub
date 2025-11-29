import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Layout, FormInput, CheckSquare, List } from "lucide-react";

const AppCreator = () => {
  const templates = [
    { name: "Service Request Form", icon: FormInput, count: 12 },
    { name: "Asset Tracking", icon: CheckSquare, count: 8 },
    { name: "Incident Report", icon: List, count: 15 },
    { name: "Custom Form", icon: Layout, count: 24 },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">App Creator</h1>
            <p className="text-muted-foreground">Build custom forms and service requests with no-code</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create New App
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <template.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.count} created</p>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default AppCreator;
