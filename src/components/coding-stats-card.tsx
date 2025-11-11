import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodingStats } from "@/services/codingStats";

interface CodingStatsCardProps {
  stats: CodingStats;
}

export function CodingStatsCard({ stats }: CodingStatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* LeetCode Card */}
      <Card className="border border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <div className="h-5 w-5 bg-orange-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">LC</span>
            </div>
            LeetCode
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
              <div className="text-sm font-semibold text-blue-600">
                {stats.leetcode.rating}
              </div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
          </div>
          <div className="flex gap-1 justify-center">
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
              Easy: {stats.leetcode.easySolved}
            </Badge>
            <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
              Med: {stats.leetcode.mediumSolved}
            </Badge>
            <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
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

      {/* Codeforces Card */}
      <Card className="border border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <div className="h-5 w-5 bg-blue-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">CF</span>
            </div>
            Codeforces
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-500">
                {stats.codeforces.rating}
              </div>
              <div className="text-xs text-muted-foreground">Current Rating</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-purple-600">
                {stats.codeforces.problemsSolved}
              </div>
              <div className="text-xs text-muted-foreground">Problems Solved</div>
            </div>
          </div>
          <div className="flex gap-1 justify-center">
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
    </div>
  );
}

function getRankColor(rank: string): string {
  const lowerRank = rank.toLowerCase();
  switch (lowerRank) {
    case 'newbie':
      return 'bg-gray-100 text-gray-800';
    case 'pupil':
      return 'bg-green-100 text-green-800';
    case 'specialist':
      return 'bg-cyan-100 text-cyan-800';
    case 'expert':
      return 'bg-blue-100 text-blue-800';
    case 'candidate master':
      return 'bg-purple-100 text-purple-800';
    case 'master':
      return 'bg-orange-100 text-orange-800';
    case 'international master':
      return 'bg-orange-100 text-orange-900';
    case 'grandmaster':
      return 'bg-red-100 text-red-800';
    case 'international grandmaster':
      return 'bg-red-100 text-red-900';
    case 'legendary grandmaster':
      return 'bg-red-200 text-red-900';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}