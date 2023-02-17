import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//IMPORTACION DE ROLES Y AUTENTIFICACION

import { UserService } from '../services/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Roles } from '../modelos/rol.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userEmail: string;
  userIsAuthenticated = false;
  

  constructor(
    private router: Router,
    //ROLES Y AUTENTIFICACION
    private userService: UserService,
    private afAuth: AngularFireAuth,
   )
    {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userEmail = user.email;
      }

      this.afAuth.authState.subscribe(user => {
        this.userIsAuthenticated = !!user;
      });
      
    });
  
   }

   public isAdmin: any = null;
   public usEmail: string = null;

  ngOnInit(): void {
  }

  getCurrentUser(){
    
  }

}
