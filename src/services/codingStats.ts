import { unstable_noStore } from 'next/cache';

export interface CodingStats {
  leetcode: {
    username: string;
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    ranking: number;
    rating: number;
    avatar?: string;
  };
  codeforces: {
    username: string;
    rating: number;
    maxRating: number;
    rank: string;
    maxRank: string;
    problemsSolved: number;
    contribution: number;
    lastOnline: string;
    avatar?: string;
  };
}

// Function to fetch LeetCode stats
async function fetchLeetCodeStats(username: string) {
  try {
    // unstable_noStore(); // Commented out to allow static generation
    
    // Fetch both profile and contest data
    const [profileResponse, contestResponse] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      }),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      })
    ]);
    
    if (!profileResponse.ok) {
      throw new Error('Failed to fetch LeetCode profile stats');
    }
    
    const profileData = await profileResponse.json();
    let contestRating = 1500; // Default rating
    
    // Try to get contest rating, but don't fail if it's not available
    if (contestResponse.ok) {
      try {
        const contestData = await contestResponse.json();
        contestRating = Math.round(contestData.contestRating || 1500);
      } catch (error) {
        console.log('Contest data not available, using default rating');
      }
    }
    
    return {
      username: profileData.username || username,
      totalSolved: profileData.totalSolved || 0,
      easySolved: profileData.easySolved || 0,
      mediumSolved: profileData.mediumSolved || 0,
      hardSolved: profileData.hardSolved || 0,
      ranking: profileData.ranking || 0,
      rating: contestRating,
      avatar: profileData.avatar || undefined,
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    // Return fallback data
    return {
      username: username,
      totalSolved: 899,
      easySolved: 432,
      mediumSolved: 393,
      hardSolved: 74,
      ranking: 35759,
      rating: 1587,
    };
  }
}

// Function to fetch Codeforces stats
async function fetchCodeforcesStats(username: string) {
  try {
    // unstable_noStore(); // Commented out to allow static generation
    
    // Using Codeforces API
    const userInfoResponse = await fetch(`https://codeforces.com/api/user.info?handles=${username}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!userInfoResponse.ok) {
      throw new Error('Failed to fetch Codeforces user info');
    }
    
    const userInfoData = await userInfoResponse.json();
    
    if (userInfoData.status !== 'OK' || !userInfoData.result || userInfoData.result.length === 0) {
      throw new Error('Invalid Codeforces response');
    }
    
    const userInfo = userInfoData.result[0];
    
    // Fetch user status for problems solved count
    const userStatusResponse = await fetch(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=10000`, {
      next: { revalidate: 3600 }
    });
    
    let problemsSolved = 0;
    if (userStatusResponse.ok) {
      const userStatusData = await userStatusResponse.json();
      if (userStatusData.status === 'OK' && userStatusData.result) {
        // Count unique problems solved (accepted submissions)
        const solvedProblems = new Set();
        userStatusData.result.forEach((submission: any) => {
          if (submission.verdict === 'OK') {
            solvedProblems.add(`${submission.problem.contestId}-${submission.problem.index}`);
          }
        });
        problemsSolved = solvedProblems.size;
      }
    }
    
    return {
      username: userInfo.handle || username,
      rating: userInfo.rating || 0,
      maxRating: userInfo.maxRating || 0,
      rank: userInfo.rank || 'unrated',
      maxRank: userInfo.maxRank || 'unrated',
      problemsSolved: problemsSolved,
      contribution: userInfo.contribution || 0,
      lastOnline: new Date(userInfo.lastOnlineTimeSeconds * 1000).toLocaleDateString(),
      avatar: userInfo.avatar || undefined,
    };
  } catch (error) {
    console.error('Error fetching Codeforces stats:', error);
    // Return fallback data based on scraped info
    return {
      username: username,
      rating: 957,
      maxRating: 963,
      rank: 'newbie',
      maxRank: 'newbie',
      problemsSolved: 21,
      contribution: 0,
      lastOnline: 'Recently',
    };
  }
}

// Main function to get all coding stats
export async function getCodingStats(): Promise<CodingStats> {
  const [leetcodeStats, codeforcesStats] = await Promise.all([
    fetchLeetCodeStats('kaushiksaravanan'),
    fetchCodeforcesStats('s-kaushik-s')
  ]);
  
  return {
    leetcode: leetcodeStats,
    codeforces: codeforcesStats
  };
}

// Static fallback data for development/testing
export const STATIC_CODING_STATS: CodingStats = {
  leetcode: {
    username: 'kaushiksaravanan',
    totalSolved: 899,
    easySolved: 432,
    mediumSolved: 393,
    hardSolved: 74,
    ranking: 35759,
    rating: 1587,
  },
  codeforces: {
    username: 's-kaushik-s',
    rating: 957,
    maxRating: 963,
    rank: 'newbie',
    maxRank: 'newbie',
    problemsSolved: 21,
    contribution: 0,
    lastOnline: 'Nov 2025',
  }
};