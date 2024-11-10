import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iso8601DateFormat',
  standalone: true,
})
export class Iso8601DateFormatPipe implements PipeTransform {
  /**
   * Возвращает строку даты в формате YYYY-MM-DD
   * Если value невозможно отформатировать - возвращает пустую строку
   * @param value
   */
  public transform(value: unknown): string {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      const parsedDate = new Date(value);
      if (isNaN(parsedDate.getTime())) {
        return '';
      }
      return this.formatDateToString(parsedDate);
    }

    if (value instanceof Date) {
      return this.formatDateToString(value);
    }

    return '';
  }

  private formatDateToString(date: Date): string {
    // adjustedDate нужна для корректировки поведения toISOString(), так как этот метод возвращает строку даты в UTC
    // В итоге получается, что результат - день назад от выбранной даты
    // Операция в adjustedDate исправляет эту проблему
    const adjustedDate = new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000));
    const isoString = adjustedDate.toISOString();
    return isoString.substring(0, 10);
  }
}
