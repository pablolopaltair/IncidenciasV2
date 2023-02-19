import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//IMPORTACION DE ROLES Y AUTENTIFICACION
import { UserService } from '../services/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {UserInterface } from '../modelos/rol.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //ROLES Y AUTENTIFICACION
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
   public isDirectivo: any = null;
   public isMantenimiento: any = null;
   public isUsuario: any = null;


   public userUid: string = null;

  ngOnInit(): void {
    this.getCurrentUser();
  }




  //METODO PARA IDENTIFICAR LOS ROLES QUE POSEE EL USUARIO
  getCurrentUser() {
    this.userService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.userService.isUserRole(this.userUid).subscribe(userRole => {

          //CHECKEO ADMIN
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          if(this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin') && userRole.roles.admin == true){
            this.isAdmin = true;
          }else{
            this.isAdmin  = false;
          };

          //CHECKEO USUARIO
          this.isUsuario = Object.assign({}, userRole.roles).hasOwnProperty('usuario');
          if(this.isUsuario = Object.assign({}, userRole.roles).hasOwnProperty('usuario') && userRole.roles.usuario == true){
            this.isUsuario = true;
          }else{
            this.isUsuario  = false;
          };

          //CHECKEO MATENIMIENTO
          this.isMantenimiento = Object.assign({}, userRole.roles).hasOwnProperty('mantenimiento');
          if(this.isMantenimiento = Object.assign({}, userRole.roles).hasOwnProperty('mantenimiento') && userRole.roles.mantenimiento == true){
            this.isMantenimiento = true;
          }else{
            this.isMantenimiento  = false;
          };

          //CHECKEO DIRECTIVO
          this.isDirectivo = Object.assign({}, userRole.roles).hasOwnProperty('directivo');
          if(this.isDirectivo = Object.assign({}, userRole.roles).hasOwnProperty('directivo') && userRole.roles.directivo == true){
            this.isDirectivo = true;
          }else{
            this.isDirectivo  = false;
          };


        })
      }
    })
  }





}
