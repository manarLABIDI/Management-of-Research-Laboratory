import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Article } from 'src/app/models/pub';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit{
  form: FormGroup = new FormGroup({
    titre:new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required]),
    sourcePdf:new FormControl(null,[Validators.required]),
    lien:new FormControl(null,[Validators.required]),
    dateApparition: new FormControl<Date | null>(null,[Validators.required]),
  });

  curentItemId!:string;
  article!:Article;
  articleGlobal! :Article;

  ngOnInit(): void {
    //if path contient id : je suis dans edit
    const currentID = this.activatedRoute.snapshot.params['id'];
    if (!!currentID) {
      //recuperer event by id
      this.AS.getArticleById(currentID).subscribe((item) => {
        this.articleGlobal = item;
        this.initFormEdit(item);
      });
    }
  }
  constructor(private AS: ArticleService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  //initialiser le form pour route edit/id
  initFormEdit(item: Article): void {
    this.form.patchValue({
      titre: item.titre,
      type: item.type,
      dateApparition: item.dateApparition,
      sourcePdf: item.sourcePdf,
      lien:item.lien
    });
  }

  submit(): void {
    const article = { ...this.articleGlobal, ...this.form.value };
    //():retour de l'observalble , {} : action à faire après le travail du thread
    this.AS.saveArticle(article).subscribe(() => {
      this.router.navigate(['/articles']);
    }); /////redirect vers /events
  }

}
