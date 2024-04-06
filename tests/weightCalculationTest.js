import { expect } from 'chai';
import { calculateClickWeight } from '../rules/calculateClickWeight.js';
import { calculateEngagementWeight } from '../rules/calculateEngagementWeight.js';
import { calculateTimeWeight } from '../rules/calculateTimeWeight.js';

describe('Weight Calculation Functions', function() {
  describe('calculateClickWeight', function() {
    it('should calculate click weight correctly', function() {
      const result = calculateClickWeight(100, 1000);
      expect(result).to.equal(0.1);
    });

    it('should return 0 when impressions are 0 to avoid division by zero', function() {
      const result = calculateClickWeight(100, 0);
      expect(result).to.equal(0);
    });
  });

  describe('calculateEngagementWeight', function() {
    it('should calculate engagement weight correctly', function() {
      const result = calculateEngagementWeight(50, 1000);
      expect(result).to.equal(0.05);
    });

    it('should return 0 when impressions are 0 to avoid division by zero', function() {
      const result = calculateEngagementWeight(50, 0);
      expect(result).to.equal(0);
    });
  });

  describe('calculateTimeWeight', function() {
    it('should return 1.3 if the current period matches the creative time period', function() {
      const currentTime = new Date().getHours();
      const currentPeriod = (currentTime >= 18 || currentTime <= 6) ? 'night' : 'day'
      const resultDay = calculateTimeWeight(currentPeriod);
      expect(resultDay).to.equal(1.3);
    });

    it('should return 1 if the current period does not match the creative time period', function() {
      const currentTime = new Date().getHours();
      const currentPeriod = (currentTime >= 18 || currentTime <= 6) ? 'day' : 'night'
      const resultNight = calculateTimeWeight(currentPeriod);
      expect(resultNight).to.equal(1);
    });
  });
});
