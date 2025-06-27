import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   @Output() addClicked = new EventEmitter<void>();
currentDate = new Date();;
formattedDate = this.formatDate(this.currentDate);
selectedView = 'day'; 
showPopup = false;

newAppointment = {
  title: '',
  start: '',
  end: '',
  resourceId: ''
};
  private formatDate(date: Date): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  }

  submitAppointment() {
  console.log('Saved:', this.newAppointment);
  // You can push it to appointments array if needed
  // this.appointments.push({ ...this.newAppointment, id: Date.now(), type: 'appointment' });
  this.closePopup();
}

closePopup() {
  this.showPopup = false;
  this.newAppointment = { title: '', start: '', end: '', resourceId: '' };
}


}
