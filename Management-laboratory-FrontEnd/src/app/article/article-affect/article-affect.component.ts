import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {MatTableDataSource} from "@angular/material/table";
import { Member } from 'src/app/models/Member';
import { Article } from 'src/app/models/pub';
import { MemberService } from 'src/app/services/member-service.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent implements OnInit{
  selectedValue !: string;
  members!: Member[];
  curentItemId!:string;
  article!:Article;
  constructor(private memberService: MemberService, private AS:ArticleService,private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((tab) => {
      this.members = tab;
    });
  }


  affect(selectedValue:string){
    this.curentItemId = this.activatedRoute.snapshot.params['id'];
    console.log(selectedValue)
    console.log(this.curentItemId)
    this.memberService.affect(selectedValue,this.curentItemId).subscribe(()=>{
      this.router.navigate(['/articles']);
    })
  }



}
