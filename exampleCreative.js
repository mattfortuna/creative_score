import { calculateCreativeScores, highestPerformingCreative } from './creativeScoring.js';
import { creatives } from './creatives.js';

// test out an example creative
const audience = 'tech';
const scoredCreatives = calculateCreativeScores(creatives, audience);
const bestCreative = highestPerformingCreative(scoredCreatives);
if (bestCreative) {
  console.log(`The best creative for '${audience}' segment is:`, bestCreative);
} else {
  console.log(`No creatives available for '${audience}' segment.`);
}
