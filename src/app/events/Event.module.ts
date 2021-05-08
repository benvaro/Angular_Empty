export class Event {
  title: string;
  description: string;
  date: string;
  image_url: string;

  constructor(
    title: string,
    description: string,
    date: string,
    image_url: string
  ) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.image_url = image_url;
  }
}
