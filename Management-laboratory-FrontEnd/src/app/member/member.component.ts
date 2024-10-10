import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../models/Member';
import { MemberService } from '../services/member-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cin', 'nom', 'dateNaissance', 'cv', 'diplome', 'sujet', 'action'];
  dataSource = new MatTableDataSource<Member>();

  constructor(private MS: MemberService, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetch();
  }

  fetch(): void {
    this.MS.getMembers().subscribe((members: Member[]) => {
      this.dataSource.data = members;
    });
  }

  onDelete(memberId: number): void {
    let dialogRef = this.dialog.open(ConfirmdialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((x) => {
      if (x) {
        this.MS.deleteMember(memberId).subscribe(() => {
          this.fetch();
        });
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
