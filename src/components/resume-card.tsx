"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  website?: string; // For school/college website links
  badges?: readonly string[];
  period: string;
  description?: string;
  linkedinPosts?: readonly { title: string; url: string }[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  website,
  badges,
  period,
  description,
  linkedinPosts = [],
}: ResumeCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const CardContent = (
    <Card className="flex">
      {/* Company Logo */}
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>

      {/* Card Content */}
      <div className="flex-grow ml-4 items-center flex-col">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {title}
                </a>
              ) : (
                title
              )}
              {badges && (
                <span className="inline-flex gap-x-1 ml-2">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-xs">{subtitle}</div>
          )}
        </CardHeader>

        {/* Auto-Expanded Description with Lighter Font */}
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm font-light"
          >
            <div className="space-y-1">
              {description.split('\n').map((line, index) => (
                <div key={index} className="flex items-start">
                  {line.trim().startsWith('•') ? (
                    <div className="flex items-start">
                      <span className="text-muted-foreground mr-2 mt-0.5">•</span>
                      <span className="flex-1">{line.trim().substring(1).trim()}</span>
                    </div>
                  ) : (
                    line.trim() && <span>{line}</span>
                  )}
                </div>
              ))}
            </div>

            {/* LinkedIn Posts Button with spacing */}
            {linkedinPosts && linkedinPosts.length > 0 && (
              <div className="mt-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="inline-flex items-center text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm"
                    >
                      View LinkedIn Posts
                      <ExternalLinkIcon className="ml-1 h-4 w-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>
                        LinkedIn Posts at {title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {linkedinPosts.map((post) => (
                        <a
                          key={post.url}
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-500 hover:underline break-words"
                        >
                          {post.title}
                        </a>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );

  return (
    <>
      {href ? (
        <Link href={href} className="block cursor-pointer">
          {CardContent}
        </Link>
      ) : (
        <div className="cursor-default">{CardContent}</div>
      )}
    </>
  );
};