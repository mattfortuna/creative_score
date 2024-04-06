import { calculateCreativeScores, highestPerformingCreative } from '../creativeScoring.js';
import {expect} from 'chai';

describe('Creative Scoring System', function() {
  describe('calculateCreativeScores', function() {
    it('should correctly calculate scores based on dynamic weights and time period', function() {
      const creatives = [
        { id: 1, impressions: 100, clicks: 10, timePeriod: 'night', engagements: 5, segmentAudience: 'tech', score: 0 },
        { id: 2, impressions: 200, clicks: 20, timePeriod: 'day', engagements: 10, segmentAudience: 'tech', score: 0 }
      ];
      const audience = 'tech';
      const currentPeriod = 'night';
      const dynamicWeights = { clickWeight: 0.5, engagementWeight: 0.3 };
     
      const scoredCreatives = calculateCreativeScores(creatives, audience);
     
      expect(scoredCreatives).to.be.an('array');
      expect(scoredCreatives[0].score).to.be.above(0);
    });
  });

  describe('highestPerformingCreative', function() {
  it('should return the creative with the highest score', function() {
      const scoredCreatives = [
        { id: 1, score: 1.5 },
        { id: 2, score: 2.0 }
      ];

      const bestCreative = highestPerformingCreative(scoredCreatives);

      expect(bestCreative).to.be.an('object');
      expect(bestCreative.id).to.equal(2);
    });

    it('should return null if no creatives are provided', function() {
      const bestCreative = highestPerformingCreative([]);
      expect(bestCreative).to.be.null;
     });
   });
});
