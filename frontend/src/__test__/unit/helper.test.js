import { API_RESPONSE } from '../__mock__/inventory-log'
import { sortByDate, preparePieChartData } from '../../utils/helper'

describe('Time series data manipulation function', () => {
  // -----------------------------------------------------
  let timeSeriesData;
  beforeEach(() => {
    timeSeriesData = sortByDate(API_RESPONSE);
  })
  // -----------------------------------------------------
  it('Result is an array', () => {
    expect(Array.isArray(timeSeriesData)).toBe(true)
  })
  // -----------------------------------------------------
  it('Unwanted data has been removed', () => {
    expect(timeSeriesData.length).toBe(3)
  })
  // -----------------------------------------------------
  it('First item is accurate', () => {
    const [firstItem] = timeSeriesData
    expect(firstItem.date).toBe("2022-01-01")
  })
  // -----------------------------------------------------
  it('Last item is accurate', () => {
    const lastItem = timeSeriesData[timeSeriesData.length - 1]
    expect(lastItem.date).toBe("2022-01-30")
  })
});

describe('Pie chart data manipulation function (without dateFilter)', () => {
  
  // -----------------------------------------------------let timeSeriesData;
  let pieChartData;
  beforeEach(() => {
    pieChartData = preparePieChartData(API_RESPONSE);
  })
  // -----------------------------------------------------
  it('Result is an array', () => {
    expect(Array.isArray(pieChartData)).toBe(true)
  })
  // -----------------------------------------------------
  it('Unwanted data has been removed', () => {
    expect(pieChartData.length).toBe(3)
  })
  // -----------------------------------------------------
  it('The result is properly summarised', () => {
    // Find one of the items in result array and test it
    const result = pieChartData.find(x => x.name === 'EB-374')
    expect(result.value).toBe(1100)
  })
})


describe('Pie chart data manipulation function (with dateFilter)', () => {
  
  // -----------------------------------------------------let timeSeriesData;
  let pieChartData;
  beforeEach(() => {
    pieChartData = preparePieChartData(API_RESPONSE, '2022-01-01');
  })
  // -----------------------------------------------------
  it('Result is an array', () => {
    expect(Array.isArray(pieChartData)).toBe(true)
  })
  // -----------------------------------------------------
  it('Unwanted data has been removed', () => {
    expect(pieChartData.length).toBe(3)
  })
  // -----------------------------------------------------
  it('The result is properly summarised', () => {
    // Find one of the items in result array and test it
    const result = pieChartData.find(x => x.name === 'EB-513')
    expect(result.value).toBe(200)
  })
})
