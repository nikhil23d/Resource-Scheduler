import { Component, Input } from '@angular/core';
import { Appointment } from '../models/appointment.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-block.component.html',
  styleUrl: './appointment-block.component.scss'
})
export class AppointmentBlockComponent {
@Input() appointment!: Appointment;
  @Input() top!: number;
  @Input() height!: number;
  
  getTimeString(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  getAppointmentColor(appointment: any): string {
  if (appointment.type !== 'appointment') return '';

  const timeKey = this.getTimeString(appointment.start); // e.g., '09:00'
  const colors = [
    '#e1f5fe', '#ffebee', '#e8f5e9', '#fff3e0',
    '#ede7f6', '#fce4ec', '#f3e5f5', '#fbe9e7',
    '#f1f8e9', '#e0f2f1', '#f9fbe7', '#ede7f6'
  ];

  let hash = 0;
  for (let i = 0; i < timeKey.length; i++) {
    hash = timeKey.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex];
}

}
