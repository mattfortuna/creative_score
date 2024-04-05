export const calculateClickWeight = (clicks, impressions) => {
    return impressions > 0 ? clicks / impressions : 0;
};
