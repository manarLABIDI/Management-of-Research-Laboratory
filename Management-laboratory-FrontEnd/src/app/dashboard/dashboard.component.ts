import { Component } from '@angular/core';
import { MemberService } from '../services/member-service.service';
import { EventService } from '../services/event.service';
import { ArticleService } from '../services/article.service';
import { ToolService } from '../services/tool.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nb_Members: number = 0;
  nb_Articles: number = 0; 
  nb_Tools: number = 0;     
  nb_Events: number = 0;
  nb_teacher : number =0;
  nb_student : number =0;

  labels:string[]= []
  constructor(private MS: MemberService, private ES: EventService, private AS: ArticleService, private TS: ToolService){
    this.MS.getMembers().subscribe((data)=>{
      this.nb_Members = data.length
    })

    this.ES.getEvent().subscribe((data)=>{
      this.nb_Events = data.length
    })

    this.AS.GetAllArticles().subscribe((data)=>{
      this.nb_Articles = data.length
    })

    this.TS.GetAllOutils().subscribe((data)=>{
      this.nb_Tools = data.length
    })

    this.MS.getMembers().subscribe(
      (data)=>{
        for (let i = 0; i < data.length; i++) {
            this.labels.push(data[i].nom)
        }
      }
    )
  }
  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: [50, 75, 60, 80, 65, 90], // Example static data    
    },
  ];
  chartLabels: string[] = this.labels;
  chartOptions: ChartOptions = {};

  chartData2: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions', 
      data: [1551, 1688, 1800, 1895, 2124, 2124],
    },
  ];
  chartLabels2: string[] = [];
  chartOptions2: ChartOptions = {};
  tab:number[]=[];
  getNumber(){
    this.MS.getNBPubMembers().subscribe((x)=>{this.tab=x})
    return this.tab;
  }

  getStudentTeacher(): void{
    
  }

  

}
