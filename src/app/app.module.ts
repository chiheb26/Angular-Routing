import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursesService } from './Services/courses.service';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';

const appRoute: Routes= [
  {path:'',component:HomeComponent},
  //{path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Courses/Course/:id',component:CourseComponent},
  {path:'**',component:ErrorComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
