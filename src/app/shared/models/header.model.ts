export class Button {
  label: string;
  action: string;
}

export class Header {
  title: string;
  subtitle: string;
  button: Button = new Button();
}
