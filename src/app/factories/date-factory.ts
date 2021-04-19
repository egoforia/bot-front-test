export class DateFactory {

  public static convertFormat(date: string): string {
    return date.split('/').reverse().join('-');
  }

  public static convertToDate(date: string): Date {
    return new Date(this.convertFormat(date));
  }
}
