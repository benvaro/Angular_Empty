import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../Event.module';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  important: boolean = false;
  @Input() currentEvent: Event;
  constructor() {}

  ngOnInit() {}

  addToFavourite(e) {
    console.log(e);
  }
}
