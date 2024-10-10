import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Evenement } from '../models/Event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  form!: FormGroup;
  eventGlobal: Evenement | undefined; // Fix the type here
  constructor(
    private ES: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  initForm(): void {
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      date: new FormControl<Date | null>(null),
      lieu: new FormControl(null, [Validators.required]),
    });
  }

  initForm2(event:Evenement): void { // Fix the type here
    this.form = new FormGroup({
      titre: new FormControl(event.titre, [Validators.required]),
      date: new FormControl(event.date, [Validators.required]),
      lieu: new FormControl(event.lieu, [Validators.required]),
    });
  }

  ngOnInit(): void {
    const idcourant = this.activatedRoute.snapshot.params['id'];
    if (!!idcourant) {
      this.ES.getEventbyID(idcourant).subscribe((event) => {
        this.eventGlobal = event;
        this.initForm2(event);
      });
    } else {
      this.initForm();
    }
  }

  OnSub(): void {
    const idcourant = this.activatedRoute.snapshot.params['id'];
    const event: Evenement = { ...this.form.value }; // Fix the type here

    if (!!idcourant) {
      this.ES.ONEDIT(idcourant, event).subscribe(() => {
        this.router.navigate(['/events']);
      });
    } else {
      this.ES.ONSAVE(event).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
}
