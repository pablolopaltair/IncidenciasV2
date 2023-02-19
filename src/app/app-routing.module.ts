import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importación de componentes (Mostrar, Editar y Crear)
import { CrearComponent } from './componentes/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RevisionEditarComponent } from './componentes/revision-editar/revision-editar.component';
import { RevisionComponent } from './componentes/revision/revision.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { Mostrar2Component } from './componentes/gestion-usuarios/mostrar2/mostrar2.component';
import { Editar2Component } from './componentes/gestion-usuarios/editar2/editar2.component';
import { GuardLogeado } from './guards/guard-logeado.guard';




//Configuración de las rutas (Edit tiene ruta hija según el ID)
const routes: Routes = [

  {path: '',component:PrincipalComponent},
  {path: 'show',component:MostrarComponent, canActivate: [GuardLogeado]},
  {path: 'create',component:CrearComponent, canActivate: [GuardLogeado]},
  {path: 'edit/:id',component:EditarComponent, canActivate: [GuardLogeado]},
  {path: 'check', component:RevisionComponent, canActivate: [GuardLogeado]},
  {path: 'checkEdit/:id', component:RevisionEditarComponent, canActivate: [GuardLogeado]},
  {path: 'login', component:LoginComponent, },
  {path: 'register', component:RegisterComponent},
  {path: 'users', component:Mostrar2Component,canActivate: [GuardLogeado]},
  {path: 'usersEdit/:id', component:Editar2Component, canActivate: [GuardLogeado]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
