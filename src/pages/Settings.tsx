import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Bell, Shield, Palette, Globe, HardDrive } from "lucide-react";

const Settings = () => {
  const settingsGroups = [
    { name: "Profile Settings", description: "Manage your account and personal information", icon: User },
    { name: "Notifications", description: "Configure alerts and notification preferences", icon: Bell },
    { name: "Security", description: "Password, 2FA, and security settings", icon: Shield },
    { name: "Appearance", description: "Customize theme and display preferences", icon: Palette },
    { name: "Localization", description: "Language and regional settings", icon: Globe },
    { name: "Data & Storage", description: "Manage data retention and backups", icon: HardDrive },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your platform preferences and configuration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {settingsGroups.map((setting, index) => (
            <Card key={index} className="glass glass-hover p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <setting.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{setting.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{setting.description}</p>
                  <Button variant="ghost" size="sm">Configure</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
