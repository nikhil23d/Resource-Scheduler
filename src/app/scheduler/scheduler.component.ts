import { Component, OnInit } from '@angular/core';
import { SchedulerConfig } from '../models/config.model';
import { Resource } from '../models/resource.model';
import { Appointment } from '../models/appointment.model';
import { interval } from 'rxjs';
import { TimeColumnComponent } from "../time-column/time-column.component";
import { ResourceColumnComponent } from "../resource-column/resource-column.component";
import { CurrentTimeComponent } from "../current-time/current-time.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, TimeColumnComponent, ResourceColumnComponent, CurrentTimeComponent],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent implements OnInit {
config: SchedulerConfig = {
    startHour: 9,
    endHour: 18,
    slotDuration: 15
  };

  resources: Resource[] = [
    { id: 1, name: 'JADES' },
    { id: 2, name: 'EMMA' },
    { id: 3, name: 'AINE' },
    { id: 4, name: 'AONGHUS' }
  ];

  appointments: Appointment[] = [
    { 
      id: 1, 
      title: 'Nail Art Design - ADES', 
      start: new Date(2025, 1, 19, 15, 0), 
      end: new Date(2025, 1, 19, 15, 30),
      resourceId: 1,
      type: 'appointment'
    },
    {
      id: 2,
      title: 'Express Gel Polish - Red Passion',
      start: new Date(2025, 1, 19, 10, 0),
      end: new Date(2025, 1, 19, 10, 45),
      resourceId: 2,
      type: 'appointment'
    },
    {
      id: 3,
      title: 'BIAB - REFILL FULL COLOUR ONLY',
      start: new Date(2025, 1, 19, 9, 0),
      end: new Date(2025, 1, 19, 9, 45),
      resourceId: 1,
      type: 'appointment'
    },
    {
      id: 4,
      title: 'Matte Finish Gel Overlay',
      start: new Date(2025, 1, 19, 11, 0),
      end: new Date(2025, 1, 19, 11, 45),
      resourceId: 3,
      type: 'appointment'
    },
    {
      id: 5,
      title: 'French Tips + Cuticle Cleanse',
      start: new Date(2025, 1, 19, 10, 0),
      end: new Date(2025, 1, 19, 10, 45),
      resourceId: 4,
      type: 'appointment'
    },
    {
      id: 6,
      title: 'Glitter Glam Nail Extensions',
      start: new Date(2025, 1, 19, 11, 0),
      end: new Date(2025, 1, 19, 11, 45),
      resourceId: 2,
      type: 'appointment'
    },{
      id: 7,
      title: 'Hydrating Hand Spa + Polish',
      start: new Date(2025, 1, 19, 11, 0),
      end: new Date(2025, 1, 19, 11, 45),
      resourceId: 1,
      type: 'appointment'
    },
    {
      id: 8,
      title: 'Hydrating Hand Spa + Polish',
      start: new Date(2025, 1, 19, 10, 15),
      end: new Date(2025, 1, 19, 11, 30),
      resourceId: 4,
      type: 'appointment'
    },{
      id: 9,
      title: 'Hydrating Hand Spa + Polish',
      start: new Date(2025, 1, 19, 10, 30),
      end: new Date(2025, 1, 19, 11, 45),
      resourceId: 3,
      type: 'appointment'
    },

    { 
    id: 1, 
    title: 'JADES', 
    start: new Date(2025, 1, 19, 12, 0), 
    end: new Date(2025, 1, 19, 12, 30),
    resourceId: 1,
    type: 'appointment'
  },
  { 
    id: 2, 
    title: 'EMIA', 
    start: new Date(2025, 1, 19, 13, 0), 
    end: new Date(2025, 1, 19, 15, 30),
    resourceId: 2,
    type: 'appointment'
  },
  { 
    id: 3, 
    title: 'ANE', 
    start: new Date(2025, 1, 19, 14, 0), 
    end: new Date(2025, 1, 19, 14, 30),
    resourceId: 3,
    type: 'appointment'
  },
  { 
    id: 4, 
    title: 'AONGHUS', 
    start: new Date(2025, 1, 19, 15, 0), 
    end: new Date(2025, 1, 19, 15, 30),
    resourceId: 4,
    type: 'appointment'
  },
  
  {
    id: 5,
    title: 'BIAB - REFILL FULL COLOUR ONLY',
    start: new Date(2025, 1, 19, 16, 0),
    end: new Date(2025, 1, 19, 16, 45),
    resourceId: 1,
    type: 'appointment'
  },
  {
    id: 6,
    title: 'No show',
    start: new Date(2025, 1, 19, 16, 0),
    end: new Date(2025, 1, 19, 16, 30),
    resourceId: 2,
    type: 'unavailable'
  },
  {
    id: 7,
    title: 'No show',
    start: new Date(2025, 1, 19, 16, 0),
    end: new Date(2025, 1, 19, 16, 30),
    resourceId: 3,
    type: 'unavailable'
  },

  {
    id: 8,
    title: 'Vita Liberata Full Body Spray',
    start: new Date(2025, 1, 19, 17, 0),
    end: new Date(2025, 1, 19, 17, 30),
    resourceId: 1,
    type: 'appointment'
  },
  {
    id: 9,
    title: 'No show',
    start: new Date(2025, 1, 19, 17, 0),
    end: new Date(2025, 1, 19, 17, 30),
    resourceId: 2,
    type: 'unavailable'
  },
  {
    id: 10,
    title: 'Gel Polish/Shellic Removal',
    start: new Date(2025, 1, 19, 17, 0),
    end: new Date(2025, 1, 19, 17, 30),
    resourceId: 3,
    type: 'appointment'
  },
  {
    id: 11,
    title: 'No show',
    start: new Date(2025, 1, 19, 17, 0),
    end: new Date(2025, 1, 19, 17, 30),
    resourceId: 4,
    type: 'unavailable'
  },
  {
    id: 12,
    title: 'Eye Trio (Brow Shape + Tint + Lash Tint)',
    start: new Date(2025, 1, 19, 17, 30),
    end: new Date(2025, 1, 19, 18, 0),
    resourceId: 1,
    type: 'appointment'
  },
  {
    id: 13,
    title: 'No show',
    start: new Date(2025, 1, 19, 17, 30),
    end: new Date(2025, 1, 19, 18, 0),
    resourceId: 2,
    type: 'unavailable'
  },
  {
    id: 14,
    title: 'Gel Polish/Shellic Application Toes',
    start: new Date(2025, 1, 19, 17, 30),
    end: new Date(2025, 1, 19, 18, 0),
    resourceId: 3,
    type: 'appointment'
  },
  {
    id: 15,
    title: 'No show',
    start: new Date(2025, 1, 19, 17, 30),
    end: new Date(2025, 1, 19, 18, 0),
    resourceId: 4,
    type: 'unavailable'
  },
  {
    id: 16,
    title: 'Cathal',
    start: new Date(2025, 1, 19, 16, 55),
    end: new Date(2025, 1, 19, 17, 25),
    resourceId: 4,
    type: 'appointment'
  },

  {
    id: 17,
    title: 'GETTED',
    start: new Date(2025, 1, 19, 18, 0),
    end: new Date(2025, 1, 19, 18, 30),
    resourceId: 1,
    type: 'appointment'
  }
  ];

  currentTime = new Date();
  pixelsPerHour = 120;
  pixelsPerMinute = this.pixelsPerHour / 60;

  ngOnInit() {
    interval(60000).subscribe(() => {
      this.currentTime = new Date();
    });
    
    this.appointments = this.appointments.map(appt => ({
      ...appt,
      resource: this.resources.find(r => r.id === appt.resourceId)
    }));
  }

  get totalHeight() {
    return (this.config.endHour - this.config.startHour) * this.pixelsPerHour;
  }

  shouldShowCurrentTime(): boolean {
  const currentHour = this.currentTime.getHours();
  return currentHour >= this.config.startHour && currentHour < this.config.endHour;
}

trackByResource(index: number, resource: any): number {
  return index;
}
}
