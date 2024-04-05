export const calculateTimeWeight = (creativeTimePeriod) => {
    const currentTime = new Date().getHours(); // Current hour (military) for time weight
    const currentPeriod = (currentTime >= 18 || currentTime <= 6) ? 'night' : 'day'
    return currentPeriod === creativeTimePeriod ? 1.3 : 1;
};
