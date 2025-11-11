import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "lucide-react";

interface BlogCardProps {
  title: string;
  href: string;
  publishedAt: string;
  summary: string;
  readTime: string;
}

export const BlogCard = ({
  title,
  href,
  publishedAt,
  summary,
  readTime,
}: BlogCardProps) => {
  return (
    <Link href={href} className="block">
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors">
            {summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};