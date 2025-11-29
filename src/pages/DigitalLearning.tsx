import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, GraduationCap, BookOpen, Award, PlayCircle } from "lucide-react";

const DigitalLearning = () => {
  const courses = [
    { name: "IT Security Fundamentals", progress: 75, enrolled: 18, icon: GraduationCap },
    { name: "Service Desk Best Practices", progress: 100, enrolled: 24, icon: BookOpen },
    { name: "Network Administration", progress: 45, enrolled: 12, icon: Award },
    { name: "Cloud Computing Basics", progress: 30, enrolled: 15, icon: PlayCircle },
  ];

  return (
    <PageLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Digital Learning</h1>
            <p className="text-muted-foreground">Training modules, certifications, and knowledge base</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Course
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="glass glass-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <course.icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-muted-foreground">{course.enrolled} enrolled</span>
              </div>
              <h3 className="font-semibold mb-4">{course.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-gradient font-semibold">{course.progress}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default DigitalLearning;
