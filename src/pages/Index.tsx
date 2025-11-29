import { 
  LayoutDashboard, 
  Workflow, 
  MessageSquare, 
  Bot, 
  BarChart3, 
  GraduationCap, 
  Video, 
  Database,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCard } from "@/components/StatCard";

const Index = () => {
  const features = [
    {
      title: "App Creator",
      description: "Build custom forms, service requests, and asset tracking in minutes with our no-code builder.",
      icon: LayoutDashboard,
      stats: [{ label: "Active Apps", value: "24" }],
    },
    {
      title: "Workflow Creator",
      description: "Design automated ticket routing, escalation workflows, and SLA management with drag-and-drop.",
      icon: Workflow,
      stats: [{ label: "Workflows", value: "18" }],
    },
    {
      title: "Communication Hub",
      description: "Team chat, ticket notifications, broadcast announcements, and shift handover management.",
      icon: MessageSquare,
      stats: [{ label: "Messages", value: "1.2k" }],
    },
    {
      title: "AI Bot Builder",
      description: "Create multilingual support chatbots for FAQs, password resets, and common IT queries.",
      icon: Bot,
      stats: [{ label: "Active Bots", value: "8" }],
    },
    {
      title: "MIS Builder",
      description: "Generate service reports, SLA compliance dashboards, and team performance metrics.",
      icon: BarChart3,
      stats: [{ label: "Reports", value: "36" }],
    },
    {
      title: "Digital Learning",
      description: "IT training modules, certification courses, knowledge base, and interactive quizzes.",
      icon: GraduationCap,
      stats: [{ label: "Courses", value: "42" }],
    },
    {
      title: "Video Analytics",
      description: "Monitor data center surveillance and analyze training video completion rates.",
      icon: Video,
      stats: [{ label: "Videos", value: "156" }],
    },
    {
      title: "Data Analytics",
      description: "Predict recurring issues, identify bottlenecks, and optimize resource allocation.",
      icon: Database,
      stats: [{ label: "Insights", value: "89" }],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16">
        <div className="p-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-2xl glass p-8 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-3">
                  Welcome to <span className="text-gradient">ITSM Platform</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Comprehensive IT Service Management & Support Platform with AI-powered tools for modern enterprises.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Active Tickets"
                value="127"
                change="+12% from last week"
                changeType="positive"
                icon={AlertCircle}
              />
              <StatCard
                title="Resolved Today"
                value="48"
                change="+8% from yesterday"
                changeType="positive"
                icon={CheckCircle2}
              />
              <StatCard
                title="Team Members"
                value="24"
                change="3 online now"
                changeType="neutral"
                icon={Users}
              />
              <StatCard
                title="SLA Compliance"
                value="94.5%"
                change="+2.3% this month"
                changeType="positive"
                icon={TrendingUp}
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Platform Features</h2>
                <p className="text-muted-foreground">Access all your IT service management tools in one place</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                  gradient={index % 3 === 0}
                  onAction={() => console.log(`Opening ${feature.title}`)}
                />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass glass-hover p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: "New ticket created", time: "2 minutes ago", type: "ticket" },
                  { action: "Workflow automation completed", time: "15 minutes ago", type: "workflow" },
                  { action: "Training module completed by 5 users", time: "1 hour ago", type: "learning" },
                  { action: "Bot resolved 12 queries", time: "2 hours ago", type: "bot" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass glass-hover p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">System Health</h3>
              <div className="space-y-4">
                {[
                  { label: "API Response Time", value: "145ms", percentage: 95, status: "success" },
                  { label: "Database Performance", value: "98%", percentage: 98, status: "success" },
                  { label: "Bot Accuracy", value: "92%", percentage: 92, status: "success" },
                  { label: "User Satisfaction", value: "4.8/5", percentage: 96, status: "success" },
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <span className="text-sm text-gradient font-semibold">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
                        style={{ width: `${metric.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
