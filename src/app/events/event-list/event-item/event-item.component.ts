import { Component, OnInit } from '@angular/core';
import { Event } from '../../Event.module';
import { EventsService } from '../../Events.service';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  important: boolean = false;
  events: Event[];
  constructor(private service: EventsService) {}

  ngOnInit() {
    this.events = this.service.getAllEvents();
  }

  addToFavourite(e) {
    console.log(e);
  }
}
