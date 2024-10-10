import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app-config';
import { Observable } from 'rxjs';

import { Member } from '../models/Member';
import { Article } from '../models/pub';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:9000/MEMBRE-SERVICE/';

  constructor(private httpClient: HttpClient) {}

  getMembers(): Observable<Member[]>{
    return this.httpClient.get<Member[]>('http://localhost:9000/MEMBRE-SERVICE/membres');
    //return new Observable((observer) => {observer.next(this.tab.find((member)=>member.id === id))});
  }

  saveMember(member: Member): Observable<void> {
    return this.httpClient.post<void>(
      this.apiUrl + (member.type == 'etd' ? 'etudiant' : 'enseignant'),
      member
    );
  }
  

  updateMember(type:string, member: Member): Observable<Member>{
    if (type == "etudiant") {
      return this.httpClient.put<Member>(`${API.url}/${API.member}/members/etudiant/${member.id}/update`, member);
    } else if (type == "enseignant") {
      return this.httpClient.put<Member>(`${API.url}/${API.member}/members/enseignant/${member.id}/update`, member);
    } else {
      return new Observable(observer => observer.error('Invalid member type'));
    }
  }

  getMemberById(idCourant: string): Observable<Member> {
    return this.httpClient.get<Member>(this.apiUrl + 'membres/' + idCourant);
  }

  deleteMember(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + 'membres/' + id);
  }

  tabpub: number[] = [];
  count: number = 0;

  getNBPubMembers(): Observable<number[]> {
    // Uncomment the following block
    // for (let i = 0; i < this.tab.length; i++) {
    //   this.count = 0;
    //   this.count = this.tab[i].tab_pub.length;
    //   this.tabpub.push(this.count);
    // }
    // return new Observable((observer) => observer.next(this.tabpub));

    // If you want to use the API call instead, you can replace the commented block with this line:
    return this.httpClient.get<number[]>(`${API.url}/${API.member}/members/numberpublications`);
  }

  affect(idm : string,idp :string){
    return this.httpClient.get<Article>(
      'http://localhost:9000/MEMBRE-SERVICE/affect/publication/'+idp+'/to-member/'+idm,
    );
  }
}
