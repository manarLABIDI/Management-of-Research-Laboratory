import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';
import { Event } from '@angular/router';
import { Evenement } from '../models/Event';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  constructor(private ES: EventService, private dialog: MatDialog) {}

   dataSource!: Evenement[];
  displayedColumns: string[] = ['id', 'titre', 'date', 'lieu', 'action'];

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents(): void {
//     this.ES.getEvent().subscribe((pubs:Event[]) => {
//       this.dataSource = pubs;

// console.log(pubs)     
//     });

this.ES.getEvent().subscribe((data)=>{
  this.dataSource = data;
})
  }

  Delete(id: string): void {
    let dialogRef = this.dialog.open(ConfirmdialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((x: any) => {
      if (x) {
        this.ES.DeleteEvent(id).subscribe(() => {
          this.getEvents();
        });
      }
    });
  }
}