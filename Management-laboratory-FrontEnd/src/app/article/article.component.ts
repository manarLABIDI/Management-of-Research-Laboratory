import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import { ArticleService } from '../services/article.service';
import { Article } from '../models/pub';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  displayedColumns: string[] = ['id', 'title', 'type','sourcePdf','dateApparition','link','action'];
  constructor(private AS: ArticleService, private router:Router, private dialog:MatDialog) {
  }
  dataSource!: MatTableDataSource<Article>;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.AS.GetAllArticles().subscribe((tab) => {
      this.dataSource = new MatTableDataSource(tab);
    });
  }

  delete(id:string): void {
    let dialogRef = this.dialog.open(ConfirmdialogComponent, {});
    dialogRef.afterClosed().subscribe(() => {
      this.AS.deleteArticleById(id).subscribe(()=>{
        this.fetch();
      });
    });
  }
}
