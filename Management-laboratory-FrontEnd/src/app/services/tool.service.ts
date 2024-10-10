import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tool} from "../models/tool";

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  // without backend
  // tab:Tool[] = GLOBAL._DB.events;
  // eventToSave!: Evenement;

  constructor(private httpClient: HttpClient) { }

  GetAllOutils(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>('http://localhost:9000/OUTIL-SERVICE/outils');

    // return new Observable((observer) => {
    //   observer.next(this.tab);
    // });
  }

  saveOutils(event: any): Observable<Tool> {
    return this.httpClient.post<Tool>(
      'http://localhost:9000/OUTIL-SERVICE/outil',
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


  deleteOutilById(id: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:9000/OUTIL-SERVICE/outils/'+id);

    // this.tab = this.tab.filter((item) => item.id != id);
    // return new Observable((observer) => {
    //   observer.next();
    // });
  }

  getOutilById(idCourant: String): Observable<Tool> {
    return this.httpClient.get<Tool>(
      'http://localhost:9000/OUTIL-SERVICE/outils/'+idCourant,
    );

    // return new Observable((observer) => {
    //   observer.next(this.tab.find((item) => item.id == idCourant));
    // });
  }

}
