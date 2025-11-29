import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, MessageSquare, Bell, Megaphone, Users } from "lucide-react";

const Communication = () => {
  const channels = [
    { name: "Team Chat", icon: MessageSquare, unread: 12, members: 24 },
    { name: "Notifications", icon: Bell, unread: 5, members: 24 },
    { name: "Announcements", icon: Megaphone, unread: 2, members: 24 },
    { name: "Shift Handover", icon: Users, unread: 0, members: 8 },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Communication Hub</h1>
            <p className="text-muted-foreground">Team chat, notifications, and announcements</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Message
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <channel.icon className="h-6 w-6" />
                </div>
                {channel.unread > 0 && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {channel.unread}
                  </span>
                )}
              </div>
              <h3 className="font-semibold mb-1">{channel.name}</h3>
              <p className="text-sm text-muted-foreground">{channel.members} members</p>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Communication;
