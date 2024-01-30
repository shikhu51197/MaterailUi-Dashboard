function calculateRevenue(dataPoints) {
  return dataPoints.reduce((sum, dataPoint) => sum + parseFloat(dataPoint['Profit Percentage']), 0);
}

function downsampleData(dataset, targetSize) {
  const originalSize = dataset.length;

  if (targetSize >= originalSize) {
    return dataset;
  }

  const interval = Math.ceil(originalSize / targetSize);
  const downsampledData = [];

  for (let i = 0; i < originalSize; i += interval) {
    const startIndex = i;
    const endIndex = Math.min(i + interval, originalSize);

    // Calculate the average profit percentage over the interval
    const averageProfit = calculateRevenue(dataset.slice(startIndex, endIndex));

    // Use the timestamp of the first data point in the interval
    const timestamp = dataset[startIndex].Timestamp;

    // Create a new downsampled data point
    downsampledData.push({ Timestamp: timestamp, 'ProfitPercentage': averageProfit });
  }

  return downsampledData;
}
  
  module.exports = {  downsampleData, calculateRevenue };
  