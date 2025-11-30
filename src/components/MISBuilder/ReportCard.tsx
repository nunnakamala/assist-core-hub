import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ReportCardProps {
  name: string;
  type: string;
  lastUpdated: string;
  icon: LucideIcon;
  onView: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ReportCard = ({
  name,
  type,
  lastUpdated,
  icon: Icon,
  onView,
  onEdit,
  onDelete,
}: ReportCardProps) => {
  return (
    <Card className="glass glass-hover p-6 cursor-pointer group relative">
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onView}>
              <Eye className="h-4 w-4 mr-2" />
              View Report
            </DropdownMenuItem>
            {onEdit && (
              <DropdownMenuItem onClick={onEdit}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Report
              </DropdownMenuItem>
            )}
            {onDelete && (
              <DropdownMenuItem onClick={onDelete} className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Report
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div onClick={onView} className="flex flex-col h-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold mb-1 text-lg">{name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{type}</p>
        <p className="text-xs text-muted-foreground mt-auto">Updated {lastUpdated}</p>
      </div>
    </Card>
  );
};
