import { 
  LayoutDashboard, 
  Workflow, 
  MessageSquare, 
  Bot, 
  BarChart3, 
  GraduationCap, 
  Video, 
  Database,
  Settings
} from "lucide-react";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "App Creator", href: "/app-creator", icon: LayoutDashboard },
  { name: "Workflow Creator", href: "/workflow", icon: Workflow },
  { name: "Communication", href: "/communication", icon: MessageSquare },
  { name: "Bot Builder", href: "/bot-builder", icon: Bot },
  { name: "MIS Builder", href: "/mis-builder", icon: BarChart3 },
  { name: "Digital Learning", href: "/learning", icon: GraduationCap },
  { name: "Video Analytics", href: "/video-analytics", icon: Video },
  { name: "Data Analytics", href: "/data-analytics", icon: Database },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 glass border-r border-border">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-border px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gradient">ITSM Platform</h1>
              <p className="text-xs text-muted-foreground">Service Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
              activeClassName="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Settings */}
        <div className="border-t border-border p-4">
          <NavLink
            to="/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
            activeClassName="bg-primary/10 text-primary"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
