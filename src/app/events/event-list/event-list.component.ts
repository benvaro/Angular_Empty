import { Component, OnInit } from '@angular/core';
import { Event } from '../Event.module';
import { EventsService } from '../Events.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private service: EventsService) {}

  ngOnInit() {
    this.events = this.service.getAllEvents();
  }
}
