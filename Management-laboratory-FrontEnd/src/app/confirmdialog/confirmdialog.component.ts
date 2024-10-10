import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent {

  public title = "Are you sure!";
  public content = "Do you really want to remove this item ?";
  public cancelButton = "cancel";
  confirmButton = "Confirm";
  //forcage de type  => apparait toujours en boite de dialogue 
  constructor(public dialogRef: MatDialogRef<ConfirmdialogComponent>) { }

}
