import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app-config';
import { Observable } from 'rxjs';
import { Evenement } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private httpclient: HttpClient) {}
  tabEvent: Evenement[] = [];

  DeleteEvent(id: string): Observable<void> {
    return this.httpclient.delete<void>(
      `http://localhost:9000/EVENEMENT-SERVICE/evenements/${id}`
    );
  }

  // version1
  ONSAVE(event: Evenement): Observable<void> {
    this.tabEvent.push(event);
    return this.httpclient.post<void>(
      'http://localhost:9000/EVENEMENT-SERVICE/evenement',
      event
    ); /// link eli testi bih fil postman );
  }
  getEvent(): Observable<Evenement[]> {
    return this.httpclient.get<Evenement[]>('http://localhost:9000/EVENEMENT-SERVICE/evenements'); /// link eli testi bih fil postman );
  }
  getEventbyID(id: string): Observable<Evenement> {
    return this.httpclient.get<Evenement>(`http://localhost:9000/EVENEMENT-SERVICE/evenements/${id}`);
  };
  ONEDIT(id: string, event: Evenement): Observable<void> {
    return this.httpclient.put<void>(
      `http://localhost:9000/EVENEMENT-SERVICE/evenement/${id}`,
      event
    );
  }
}