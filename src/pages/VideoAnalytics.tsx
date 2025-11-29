import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Video, Camera, Play, Activity } from "lucide-react";

const VideoAnalytics = () => {
  const videos = [
    { name: "Data Center Cam 01", status: "Live", alerts: 0, icon: Camera },
    { name: "Training Video Analytics", status: "Processing", alerts: 0, icon: Play },
    { name: "Security Feed Analysis", status: "Live", alerts: 2, icon: Activity },
    { name: "Server Room Monitor", status: "Live", alerts: 0, icon: Video },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Video Analytics</h1>
            <p className="text-muted-foreground">Monitor surveillance and analyze training videos</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Video Source
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <video.icon className="h-6 w-6" />
                </div>
                {video.alerts > 0 && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground">
                    {video.alerts}
                  </span>
                )}
              </div>
              <h3 className="font-semibold mb-2">{video.name}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                video.status === 'Live' 
                  ? 'bg-success/10 text-success' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {video.status}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default VideoAnalytics;
