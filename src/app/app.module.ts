import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventsComponent } from './events/events.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
