import dayjs from 'dayjs'
import { DateProvider } from '../../useCases/protocols/dateProvider/DateProvider';

export class DayJSAdapter implements DateProvider {
  constructor(
    private readonly days: number
  ) {}

  addDays(): Date {
    return dayjs().add(this.days, 'days').toDate()
  }
}