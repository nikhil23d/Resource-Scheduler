import { Component } from '@angular/core';
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SchedulerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resource-scheduler';
}
