import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

interface ResumeDownloadButtonProps {
  resumeUrl: string;
  className?: string;
}

export function ResumeDownloadButton({ resumeUrl, className = "" }: ResumeDownloadButtonProps) {
  // Convert Google Drive sharing URL to direct download URL
  const getDirectDownloadUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
      }
    }
    return url;
  };

  const directUrl = getDirectDownloadUrl(resumeUrl);

  return (
    <div className={`flex gap-2 ${className}`}>
      <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          View Resume
        </Button>
      </Link>
      <Link href={directUrl} target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </Link>
    </div>
  );
}