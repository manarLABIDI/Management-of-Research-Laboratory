import { Component } from '@angular/core';
import { ToolService } from '../services/tool.service';
import { MatDialog } from '@angular/material/dialog';
import { Tool } from '../models/tool';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
  constructor(private toolService: ToolService, private dialog:MatDialog) {}

  displayedColumns: string[] = ['id', 'source','date','action'];
  dataSource!: Tool[];
  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.toolService.GetAllOutils().subscribe((tab) => {
      this.dataSource = tab;
    });
  }


  delete(id: string): void {
    let dialogRef = this.dialog.open(ConfirmdialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((x: any) => {
      if (x) {
        this.toolService.deleteOutilById(id).subscribe(()=>{
          this.fetch();
        });
      }
    });
  }

}
