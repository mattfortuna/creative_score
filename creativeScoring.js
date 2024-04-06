import { calculateClickWeight } from './rules/calculateClickWeight.js';
import { calculateEngagementWeight } from './rules/calculateEngagementWeight.js';
import { calculateTimeWeight } from './rules/calculateTimeWeight.js';
import { creatives } from './creatives.js';
  
const audience = 'tech'; // this can be made to be variable as well
// Dynamic Weights
const dynamicWeights = {
  clickWeight: 0.5,
  engagementWeight: 0.3,
};
  
  // Calculate the score of each creative using above dynamicWeights
export const calculateCreativeScores = (creatives, audience, currentPeriod) => {
    return creatives
      .filter(creative => creative.segmentAudience === audience)
      .map(creative => {
        const clickWeight = calculateClickWeight(creative.clicks, creative.impressions);
        const engagementWeight = calculateEngagementWeight(creative.engagements, creative.impressions);
        const timeWeight = calculateTimeWeight(creative.timePeriod);
  
        const score = (clickWeight + engagementWeight) * timeWeight;
        return { ...creative, score };
      });
  };

// Select best of scored creatives
function highestPerformingCreative(scoredCreatives) {
  if (scoredCreatives.length === 0) {
    return null;
  }
  return scoredCreatives.reduce((prev, current) => (prev.score > current.score) ? prev : current);
}

// Example case
const scoredCreatives = calculateCreativeScores(creatives, audience, dynamicWeights);
const bestCreative = highestPerformingCreative(scoredCreatives);
if (bestCreative) {
  console.log(`The best creative for '${audience}' segment is:`, bestCreative);
} else {
  console.log(`No creatives available for '${audience}' segment.`);
}
