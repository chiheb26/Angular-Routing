import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './course-guard-service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';
const routes: Routes = [
  {path:'',component:HomeComponent},
  //{path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[CanDeactivateGuardService]},
  {path:'Courses',component:CoursesComponent,resolve:{courses:CourseResolveService}},
  //{path:'Courses',component:CoursesComponent,canActivate:[CourseGuardService]},
   // {path:'Courses/Course/:id',component:CourseComponent},
  {path:'Courses',canActivateChild:[CourseGuardService], children:[
    {path:'Course/:id',component:CourseComponent}
    //,{path:'Course/:name',component:CourseComponent}
  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
