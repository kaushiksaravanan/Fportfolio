import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodingStats } from "@/services/codingStats";
import Link from "next/link";

interface CodingStatsCardProps {
  stats: CodingStats;
}

export function CodingStatsCard({ stats }: CodingStatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="region" aria-label="Competitive programming statistics">
      {/* LeetCode Card */}
      <Link
        href="https://leetcode.com/u/kaushiksaravanan/"
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        aria-label={`View LeetCode profile - ${stats.leetcode.totalSolved} problems solved, rating ${stats.leetcode.rating}`}
      >
        <Card className="border border-border/50 h-full hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <div className="h-5 w-5 bg-orange-500 rounded-sm flex items-center justify-center" aria-hidden="true">
                <span className="text-white text-xs font-bold">LC</span>
              </div>
              LeetCode
              <span className="ml-auto text-xs text-muted-foreground">↗</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-xl font-bold text-orange-500">
                  {stats.leetcode.totalSolved}
                </div>
                <div className="text-xs text-muted-foreground">Total Solved</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {stats.leetcode.rating}
                </div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>
            <div className="flex gap-1 justify-center flex-wrap">
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-300">
                Easy: {stats.leetcode.easySolved}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-300">
                Med: {stats.leetcode.mediumSolved}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300">
                Hard: {stats.leetcode.hardSolved}
              </Badge>
            </div>
            {stats.leetcode.ranking > 0 && (
              <div className="text-center text-xs text-muted-foreground">
                Global Ranking: #{stats.leetcode.ranking.toLocaleString()}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>

      {/* Codeforces Card */}
      <Link
        href="https://codeforces.com/profile/s-kaushik-s"
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        aria-label={`View Codeforces profile - ${stats.codeforces.problemsSolved} problems solved, rating ${stats.codeforces.rating}`}
      >
        <Card className="border border-border/50 h-full hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <div className="h-5 w-5 bg-blue-500 rounded-sm flex items-center justify-center" aria-hidden="true">
                <span className="text-white text-xs font-bold">CF</span>
              </div>
              Codeforces
              <span className="ml-auto text-xs text-muted-foreground">↗</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-500 dark:text-blue-400">
                  {stats.codeforces.rating}
                </div>
                <div className="text-xs text-muted-foreground">Current Rating</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {stats.codeforces.problemsSolved}
                </div>
                <div className="text-xs text-muted-foreground">Problems Solved</div>
              </div>
            </div>
            <div className="flex gap-1 justify-center flex-wrap">
              <Badge
                variant="secondary"
                className={`text-xs capitalize ${getRankColor(stats.codeforces.rank)}`}
              >
                {stats.codeforces.rank}
              </Badge>
              {stats.codeforces.maxRating !== stats.codeforces.rating && (
                <Badge variant="outline" className="text-xs">
                  Max: {stats.codeforces.maxRating}
                </Badge>
              )}
            </div>
            {stats.codeforces.contribution > 0 && (
              <div className="text-center text-xs text-muted-foreground">
                Contribution: {stats.codeforces.contribution}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

function getRankColor(rank: string): string {
  const lowerRank = rank.toLowerCase();
  switch (lowerRank) {
    case 'newbie':
      return 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-200';
    case 'pupil':
      return 'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-300';
    case 'specialist':
      return 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900/30 dark:text-cyan-300';
    case 'expert':
      return 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300';
    case 'candidate master':
      return 'bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300';
    case 'master':
      return 'bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300';
    case 'international master':
      return 'bg-orange-100 text-orange-950 dark:bg-orange-900/30 dark:text-orange-200';
    case 'grandmaster':
      return 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300';
    case 'international grandmaster':
      return 'bg-red-100 text-red-950 dark:bg-red-900/30 dark:text-red-200';
    case 'legendary grandmaster':
      return 'bg-red-200 text-red-950 dark:bg-red-800/50 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-200';
  }
}