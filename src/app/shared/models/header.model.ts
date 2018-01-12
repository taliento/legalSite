export class Contact {
  icon: string;
  text: string;

  constructor(icon: string,text: string) {
    this.icon = icon;
    this.text = text;
  }
}

export class Button {
  label: string;
  action: string;
}

export class Header {
  title: string;
  subtitle: string;
  button: Button = new Button();
}
