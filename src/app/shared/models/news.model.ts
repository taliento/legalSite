export class News {
  title: string;
  subtitle: string;
  text: string;
  date: Date;

  constructor(title: string, subtitle: string, text: string, date: Date) {
    this.title = title;
    this.subtitle = subtitle;
    this.text = text;
    this.date = date;
  }
}
