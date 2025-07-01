import { Component, Input } from '@angular/core';
import { SchedulerConfig } from '../models/config.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-time.component.html',
  styleUrl: './current-time.component.scss'
})
export class CurrentTimeComponent {
 @Input() currentTime!: Date;
  @Input() config!: SchedulerConfig;
  @Input() pixelsPerMinute!: number;
  

  get currentTimeInIST(): Date {
  const nowUTC = new Date(new Date().toUTCString());
  const IST_OFFSET_MINUTES = 80;
  return new Date(nowUTC.getTime() + IST_OFFSET_MINUTES * 60000);
}

 get position(): number {
  const currentIST = this.currentTimeInIST;
  const hours = currentIST.getHours();
  const minutes = currentIST.getMinutes();
  const minutesFromStart = (hours - this.config.startHour) * 60 + minutes;
  return minutesFromStart * this.pixelsPerMinute;
}
}
