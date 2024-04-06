import { calculateCreativeScores, highestPerformingCreative } from './creativeScoring.js';
import { creatives } from './creatives.js';

// test out an example creative

const scoredCreatives = calculateCreativeScores(creatives, 'tech');
const bestCreative = highestPerformingCreative(scoredCreatives);
if (bestCreative) {
  console.log(`The best creative for '${audience}' segment is:`, bestCreative);
} else {
  console.log(`No creatives available for '${audience}' segment.`);
}
