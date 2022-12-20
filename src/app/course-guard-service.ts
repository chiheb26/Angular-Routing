import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable()
export class CourseGuardService implements CanActivate,CanActivateChild{
    
    constructor(private authService: AuthService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
    }
    canActivateChild(childRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        return this.canActivate(childRoute,state);
    }
}