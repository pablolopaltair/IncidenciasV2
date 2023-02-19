import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})



export class GuardLogeado implements CanActivate {

  constructor(private userService: UserService,
              private auth: UserService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.auth.isAuth().subscribe(
        res => {
          //console.log(res);
          if (res && res.uid) {
            this.userService.getUser(res.email).subscribe(
              (res: any[])  => {
                // console.log(res.length);
                res.forEach( dataUser => {
                  this.eresAdministrador(dataUser.rol);
                });
              }
            )
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
      return true;
    }
  
    eresAdministrador(rol: string): boolean {
      if(rol === "admin") {
        return true;
      }else{
        this.router.navigate(['/clientes']);
        return false;
      }
    }

    
  
}
