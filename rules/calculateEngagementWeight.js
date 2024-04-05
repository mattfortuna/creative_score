export const calculateEngagementWeight = (engagements, impressions) => {
    return impressions > 0 ? engagements / impressions : 0;
};
