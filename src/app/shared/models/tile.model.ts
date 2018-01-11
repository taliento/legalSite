export class Tile {
  _id:string;
  title: string;
  subtitle: string;
  text: string;
  icon: string;
  constructor(_id: string, title: string, subtitle: string, icon: string, text: string) {
    this._id = _id;
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.text = text;
  }

}
