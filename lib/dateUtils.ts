import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'

dayjs.extend(relativeTime)
dayjs.extend(utc)

/**
 * @description Returns a formatted date string
 * @param {string} date - date to format
 * @param {string} format - format to use, ex: 'YYYY-MM-DD'
 * @returns {string} formatted date string
 */
const getFormattedDate = (date: string, format: string = 'MMM D, YYYY') => {
  return dayjs(date).format(format)
}

/**
 * @description Returns a relative time string
 * @param {string} date - date to check
 * @returns {string} relative time string
 *
 */
const getRelativeDate = (date: string) => {
  return dayjs(date).fromNow()
}

/**
 * @description Check if a date is more than x days ago
 *
 * @param {string} date - date to check
 * @param {number} days - number of days to check
 * @returns {boolean} true if more than x days ago, false if not
 */
const isMoreThanDaysAgo = (date: string, days: number) => {
  return dayjs().diff(dayjs(date), 'day') > days
}

export { getFormattedDate, getRelativeDate, isMoreThanDaysAgo }
