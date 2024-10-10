import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { ArticleComponent } from './article/article.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ToolCreateComponent } from './tools/tool-create/tool-create.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleAffectComponent } from './article/article-affect/article-affect.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'members', pathMatch: 'full', component: MemberComponent },
  { path: ':id/edit', pathMatch: 'full', component: MemberFormComponent },
  { path: 'memberform', pathMatch: 'full', component: MemberFormComponent },
  { path: 'articles', pathMatch: 'full', component: ArticleComponent },
  {
    path: 'createArticle',
    pathMatch: 'full',
    component: ArticleFormComponent,
  },
  {
    path: 'article/edit/:id',
    pathMatch: 'full',
    component: ArticleFormComponent,
  },


  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent,
  },
  { path: 'tools', pathMatch: 'full', component: ToolsComponent },
  {
    path: 'createTool',
    pathMatch: 'full',
    component: ToolCreateComponent,
  },
  {
    path: ':id/edit/tool',
    pathMatch: 'full',
    component: ToolCreateComponent,
  },
  {path:"affect/:id",component: ArticleAffectComponent},





  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  {
    path: 'createEvent',
    pathMatch: 'full',
    component: EventFormComponent,
  },
  {
    path: ':id/edit/event',
    pathMatch: 'full',
    component: EventFormComponent,
  },
  
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
