export class Tile {
  _id:string;
  title: string;
  text: string;
  icon: string;
  constructor(_id: string, title: string, icon: string, text: string) {
    this._id = _id;
    this.title = title;
    this.icon = icon;
    this.text = text;
  }

}
