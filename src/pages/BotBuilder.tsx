import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Bot, MessageCircle, Sparkles, Globe } from "lucide-react";

const BotBuilder = () => {
  const bots = [
    { name: "IT Support Bot", status: "Active", queries: 456, accuracy: "94%", icon: Bot },
    { name: "Password Reset Bot", status: "Active", queries: 234, accuracy: "98%", icon: MessageCircle },
    { name: "FAQ Assistant", status: "Active", queries: 789, accuracy: "91%", icon: Sparkles },
    { name: "Multilingual Bot", status: "Draft", queries: 0, accuracy: "N/A", icon: Globe },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Bot Builder</h1>
            <p className="text-muted-foreground">Create intelligent chatbots for support automation</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Bot
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bots.map((bot, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <bot.icon className="h-6 w-6" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  bot.status === 'Active' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {bot.status}
                </span>
              </div>
              <h3 className="font-semibold mb-3">{bot.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{bot.queries} queries</span>
                <span className="text-gradient font-semibold">{bot.accuracy}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BotBuilder;
