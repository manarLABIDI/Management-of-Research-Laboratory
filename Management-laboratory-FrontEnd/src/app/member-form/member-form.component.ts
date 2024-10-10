import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MemberService } from '../services/member-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../models/Member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form !: FormGroup;
  MembreGlobal!: Member;
  member2!:Member;

  constructor(private MS: MemberService, private fb: FormBuilder, private router: Router , private activatedRoute : ActivatedRoute) {
   
  }
 
  //initialiser le form pour route /id/edit
  initForm3(memberbyid: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(memberbyid.cin, [Validators.required]),
      name: new FormControl(memberbyid.nom, [Validators.required]),
      cv: new FormControl(memberbyid.cv, [Validators.required]),
      type: new FormControl(memberbyid.type, [Validators.required]),
    });
  }
  //initialiser le form pour route /create
  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }
  

  ngOnInit() {
    const currentId = this.activatedRoute.snapshot.params['id'];
    this.initForm();
    if (!!currentId) {
      // Editing an existing member, fetch the member by ID and initialize the form
      this.MS.getMemberById(currentId).subscribe((item) => {
        this.MembreGlobal=item;
        this.initForm3(item);
      });
    } else {
      // Creating a new member, initialize the form
      this.initForm();
    }
  }
  

  OnSub(): void {
    console.log(this.form.value);
    
    const member =  {... this.MembreGlobal,...this.form.value}; 
     this.member2= {...member,
      id: member.id ?? Math.ceil(Math.random() * 1000),
      createdDate: new Date().toISOString()
    };
    this.MS.saveMember(member).subscribe(() => {
      this.router.navigate(['/members']);
    });
  }
}