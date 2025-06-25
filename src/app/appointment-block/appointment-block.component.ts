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
}
