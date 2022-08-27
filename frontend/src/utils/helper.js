export const sortByDate = (array) => {
  let filterResult;
  filterResult = array.sort((a, b) =>
    Date.parse(a.date) > Date.parse(b.date) ? 1 : -1
  );
  // Remove "EB-457" and "EB-222 which is  not in visual sample
  return filterResult.slice(0, 3);
};

export function preparePieChartData(arr, dateFilter) {
  let filteredArray = arr;
  let result = [];
  if (dateFilter) {
    filteredArray = arr.filter((item) => item.date === dateFilter);
  }

  const sumRecords = (array) =>
    array.reduce((acc, obj) => {
      Object.entries(obj)
        .filter(([key]) => key !== "date")
        .forEach(([key, value]) => (acc[key] = (acc[key] || 0) + value));
      return acc;
    }, {});

  const records = sumRecords(filteredArray);

  for (const [key, value] of Object.entries(records)) {
    result.push({ name: key, value: value });
  }

  // Remove last two result not in visual sample
  return result.slice(0, 3);
}
