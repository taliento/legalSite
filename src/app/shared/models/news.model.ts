export class News {
  _id: string;
  title: string;
  subtitle: string;
  text: string;
  date: Date;

  constructor(_id: string, title: string, subtitle: string, text: string, date: Date) {
    this._id = _id;
    this.title = title;
    this.subtitle = subtitle;
    this.text = text;
    this.date = date;
  }
}
