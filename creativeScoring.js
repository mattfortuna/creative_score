import { calculateClickWeight } from './rules/calculateClickWeight.js';
import { calculateEngagementWeight } from './rules/calculateEngagementWeight.js';
import { calculateTimeWeight } from './rules/calculateTimeWeight.js';
import { creatives } from './creatives.js';
  
const audience = 'tech'; // this can be made to be variable as well

// Calculate the score of each creative
export const calculateCreativeScores = (creatives, audience) => {
    return creatives
      .filter(creative => creative.segmentAudience === audience)
      .map(creative => {
        const clickWeight = calculateClickWeight(creative.clicks, creative.impressions); // calculate percentage of clicks per impression
        const engagementWeight = calculateEngagementWeight(creative.engagements, creative.impressions); // calculate percentage of engangements per impression
        const timeWeight = calculateTimeWeight(creative.timePeriod); // calculate influence of time of day
  
        const score = (clickWeight + engagementWeight) * timeWeight; // calculate score
        return { ...creative, score }; // return creative
      }); // return array of creatives with updated scores
  };

// Select best of scored creatives
export const highestPerformingCreative = (scoredCreatives) => {
  if (scoredCreatives.length === 0) {
    return null;
  }
  return scoredCreatives.reduce((prev, current) => (prev.score > current.score) ? prev : current);
};

// Example case
const scoredCreatives = calculateCreativeScores(creatives, audience);
const bestCreative = highestPerformingCreative(scoredCreatives);
if (bestCreative) {
  console.log(`The best creative for '${audience}' segment is:`, bestCreative);
} else {
  console.log(`No creatives available for '${audience}' segment.`);
}
