import { calculateClickWeight } from './rules/calculateClickWeight.js';
import { calculateEngagementWeight } from './rules/calculateEngagementWeight.js';
import { calculateTimeWeight } from './rules/calculateTimeWeight.js';

// Calculate the score of each creative
export const calculateCreativeScores = (creatives, audience) => {
  // return array of creatives with updated scores
    return creatives
      .filter(creative => creative.segmentAudience === audience)
      .map(creative => {
        // calculate percentage of clicks per impression
        const clickWeight = calculateClickWeight(creative.clicks, creative.impressions);
        // calculate percentage of engangements per impression
        const engagementWeight = calculateEngagementWeight(creative.engagements, creative.impressions);
        // calculate influence of time of day
        const timeWeight = calculateTimeWeight(creative.timePeriod);
  
        const score = (clickWeight + engagementWeight) * timeWeight; // calculate score
        return { ...creative, score }; // return creative
      });
  };

// Select best of scored creatives
export const highestPerformingCreative = (scoredCreatives) => {
  if (scoredCreatives.length === 0) {
    return null;
  }
  return scoredCreatives.reduce((prev, current) => (prev.score > current.score) ? prev : current);
};
