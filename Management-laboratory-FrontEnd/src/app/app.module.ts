import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';  
import {FirebaseModule}  from './Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { EventFormComponent } from './event-form/event-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';
import { MatSelectModule } from '@angular/material/select';
import { ToolCreateComponent } from './tools/tool-create/tool-create.component';
import { ArticleAffectComponent } from './article/article-affect/article-affect.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    DoctorComponent,
    ConfirmdialogComponent,
    LayoutComponent,
    DashboardComponent,
    ToolsComponent,
    ToolCreateComponent,
    EventsComponent,
    ArticleComponent,
    ArticleAffectComponent,
    ArticleFormComponent,
    LoginComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,MatListModule,
    MatIconModule,MatSidenavModule,
    AppRoutingModule,
    MatFormFieldModule,MatMenuModule,
    ReactiveFormsModule,FormsModule,HttpClientModule,
    FlexLayoutModule,MatButtonModule,MatInputModule,
    MatDialogModule,MatToolbarModule,
    FirebaseModule,
    MatCardModule,MatDatepickerModule, MatNativeDateModule,NgChartsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
