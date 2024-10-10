import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Tool } from 'src/app/models/tool';
import { ToolService } from 'src/app/services/tool.service';
@Component({
  selector: 'app-tool-create',
  templateUrl: './tool-create.component.html',
  styleUrls: ['./tool-create.component.css']
})
export class ToolCreateComponent implements OnInit{
  tool!:Tool;
  toolGlobal!: Tool;

  form: FormGroup = new FormGroup({
    source:new FormControl(null,[Validators.required]),
    date: new FormControl<Date | null>(null,[Validators.required]),
  });
  constructor(private toolService: ToolService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //if path contient id : je suis dans edit
    const currentID = this.activatedRoute.snapshot.params['id'];
    if (!!currentID) {
      //recuperer tool by id
      this.toolService.getOutilById(currentID).subscribe((item) => {
        this.toolGlobal = item;
        this.initFormEdit(item);
      });
    }
  }

  //initialiser le form pour route edit/id
  initFormEdit(item: Tool): void {
    this.form.patchValue({
      source: item.source,
      date: item.date,
    });
  }

  submit(): void {
    const evenement = { ...this.toolGlobal, ...this.form.value };
    //():retour de l'observalble , {} : action à faire après le travail du thread
    this.toolService.saveOutils(evenement).subscribe(() => {
      this.router.navigate(['/tools']);
    }); /////redirect vers /tools
  }
}
