import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {Article} from "../models/pub";
import {Observable} from "rxjs";
import { MemberService } from './member-service.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  article_recupere!:Article;

  constructor(private MS: MemberService,private httpClient: HttpClient) { }

  GetAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('http://localhost:9000/PUBLICATION-SERVICE/publications');

    // return new Observable((observer) => {
    //   observer.next(this.tab);
    // });
  }

  saveArticle(event: any): Observable<Article> {
    return this.httpClient.post<Article>(
      'http://localhost:9000/PUBLICATION-SERVICE/publication',
      event
    );
    //
    // this.eventToSave = {
    //   ...event,
    //   id: event.id ?? Math.ceil(Math.random() * 10000),
    // };
    // this.tab = [
    //   this.eventToSave,
    //   ...this.tab.filter((item) => item.id != this.eventToSave.id),
    // ];
    // return new Observable((observer) => {
    //   observer.next();
    // });
  }

  deleteArticleById(id: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:9000/PUBLICATION-SERVICE/'+id);

    // this.tab = this.tab.filter((item) => item.id != id);
    // return new Observable((observer) => {
    //   observer.next();
    // });
  }

  getArticleById(idCourant: String): Observable<Article> {
    return this.httpClient.get<Article>(
      'http://localhost:9000/PUBLICATION-SERVICE/publications/'+idCourant,
    );

    // return new Observable((observer) => {
    //   observer.next(this.tab.find((item) => item.id == idCourant));
    // });
  }
  OnSave(event: any): Observable<Article> {
    return this.httpClient.post<Article>(
      'http://localhost:9000/PUBLICATION-SERVICE/publication',
      event
    );}


  // affect(currentId:string,selectedValue:string) : Promise<void>{
  //   this.getArticleById(currentId).subscribe((article)=> {
  //     this.article_recupere = article;
  //    this.MS.getMemberById(selectedValue).subscribe((member)=> {
  //      if(this.article_recupere.auteur == ""){
  //        this.article_recupere.auteur = member.nom;
  //      }
  //      else {
  //        this.article_recupere.auteur = this.article_recupere.auteur +" , "+member.nom;
  //      }
  //    });
  //  })
  //   return new Promise(resolve => resolve());
  // }

  // saveArticle(ArticleToSave:any): Promise<void> {
  //   //1 completer les deux attributs (id et created date)
  //
  //   const NewArticle = {...ArticleToSave,
  //     id : ArticleToSave.id ?? Math.ceil(Math.random()*1000).toString()
  //   }
  //   //2 envoie de requete http vers le back end (en envoyant member)
  //   //return this.httpClient.post<void>("link",NewMember).toPromise();
  //   this.tab = [NewArticle,...this.tab.filter( item => item.id != NewArticle.id)];
  //   return new Promise(resolve => resolve());
  // }
  //
  //
  // getArticleById(id:string): Promise<Article>{
  //   //return this.httpClient.delete<void>("link").toPromise(); avec link=127.0.0.1/id
  //   let article: Article  = this.tab.filter(item => item.id == id)[0] ?? null;
  //   return new Promise(resolve => resolve(article));
  // }
}
