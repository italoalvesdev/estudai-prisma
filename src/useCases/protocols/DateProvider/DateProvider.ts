export interface DateProvider {
  dateNow(): Date
  addDays(days: number): Date
  addHours(hours: number): Date
  compareIfBefore(startDate: Date, endDate: Date): boolean
}