import { Component, Input } from '@angular/core';
import { SchedulerConfig } from '../models/config.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-column.component.html',
  styleUrl: './time-column.component.scss'
})
export class TimeColumnComponent {
  
  @Input() config!: SchedulerConfig;
  @Input() pixelsPerHour!: number;
  
  get hours() {
    const hours = [];
    for (let i = this.config.startHour; i <= this.config.endHour; i++) {
      hours.push(i);
    }
    return hours;
  }
  
  formatHour(hour: number): string {
    return hour > 12 ? `${hour - 12} PM` : `${hour === 12 ? '12 PM' : hour + ' AM'}`;
  }
  
  getSlotHeight(): number {
    return (this.config.slotDuration / 60) * this.pixelsPerHour;
  }

  getSlots(): any[] {
  return new Array(60 / this.config.slotDuration);
}

trackByHour(index: number, hour: any): number {
  return index; 
}

trackBySlot(index: number, slot: any): number {
  return index;
}
  
}
