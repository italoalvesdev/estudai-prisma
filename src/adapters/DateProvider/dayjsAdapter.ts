import dayjs from 'dayjs'
import { DateProvider } from '../../useCases/protocols/DateProvider/DateProvider';

export class DayJSAdapter implements DateProvider {
  constructor() {}

  dateNow(): Date {
    return dayjs().toDate()
  }

  addDays(days: number): Date {
    return dayjs().add(days, 'days').toDate()
  }

  addHours(hours: number): Date {
    return dayjs().add(hours, 'hours').toDate()
  }

  compareIfBefore(startDate: Date, endDate: Date): boolean {
    return dayjs(startDate).isBefore(endDate)
  }
}