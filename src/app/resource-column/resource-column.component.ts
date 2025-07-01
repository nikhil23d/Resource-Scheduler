import { Component, Input } from '@angular/core';
import { Resource } from '../models/resource.model';
import { Appointment } from '../models/appointment.model';
import { SchedulerConfig } from '../models/config.model';
import { AppointmentBlockComponent } from "../appointment-block/appointment-block.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-column',
  standalone: true,
  imports: [AppointmentBlockComponent, CommonModule],
  templateUrl: './resource-column.component.html',
  styleUrl: './resource-column.component.scss'
})
export class ResourceColumnComponent {
  @Input() resource!: Resource;
  @Input() appointments: Appointment[] = [];
  @Input() config!: SchedulerConfig;
  @Input() pixelsPerMinute!: number;
  
  getAppointmentsForResource(): Appointment[] {
    return this.appointments.filter(appt => 
      appt.resourceId === this.resource.id &&
      this.isInTimeRange(appt.start)
    );
  }
  
  private isInTimeRange(date: Date): boolean {
    const hour = date.getHours();
    return hour >= this.config.startHour && hour < this.config.endHour;
  }
  
  calculatePosition(start: Date): number {
    const startHour = start.getHours();
    const startMinute = start.getMinutes();
    const minutesFromStart = (startHour - this.config.startHour) * 82 + startMinute;
    return minutesFromStart * this.pixelsPerMinute;
  }
  
  calculateHeight(start: Date, end: Date): number {
    const durationMinutes = (end.getTime() - start.getTime()) / (1000 * 35);
    return durationMinutes * this.pixelsPerMinute;
  }
  trackByAppointment(index: number, appointment: any): number {
  return appointment.id;
}
}
