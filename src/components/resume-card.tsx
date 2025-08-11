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
  badges,
  period,
  description,
  linkedinPosts = [],
}: ResumeCardProps) => {
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
              {title}
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

        {/* Always Expanded Description with Lighter Font */}
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
            {description}

            {/* LinkedIn Posts Button */}
            {linkedinPosts.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 inline-flex items-center text-blue-500 hover:underline"
                  >
                    View LinkedIn Posts
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      LinkedIn Posts at {title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2">
                    {linkedinPosts.map((post) => (
                      <a
                        key={post.url}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-500 hover:underline"
                      >
                        {post.title}
                      </a>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );

  return href ? (
    <Link href={href} className="block cursor-pointer">
      {CardContent}
    </Link>
  ) : (
    <div>{CardContent}</div>
  );
};