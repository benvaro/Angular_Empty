import { Injectable } from '@angular/core';
import { Event } from './Event.module';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events: Event[] = [
    new Event(
      'City Day 1',
      '',
      '25/05/21',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB..jpg'
    ),
    new Event(
      'City Day 2',
      '',
      '25/05/21',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB..jpg'
    ),
    new Event(
      'City Day 3',
      '',
      '25/05/21',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB..jpg'
    ),
    new Event(
      'City Day 4',
      '',
      '25/05/21',
      'https://upload.wikimedia.org/wikipedia/commons/f/f1/%D0%A0%D1%96%D0%B2%D0%BD%D0%B5.%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB..jpg'
    ),
  ];

  constructor() {}

  getAllEvents(): Event[] {
    return this.events;
  }
}
