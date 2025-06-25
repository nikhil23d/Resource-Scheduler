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
  
  get position(): number {
    const hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();
    const minutesFromStart = (hours - this.config.startHour) * 60 + minutes;
    return minutesFromStart * this.pixelsPerMinute;
  }
}
