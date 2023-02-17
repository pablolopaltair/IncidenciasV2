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




//Configuración de las rutas (Edit tiene ruta hija según el ID)
const routes: Routes = [

  {path: '',component:PrincipalComponent},
  {path: 'show',component:MostrarComponent},
  {path: 'create',component:CrearComponent},
  {path: 'edit/:id',component:EditarComponent},
  {path: 'check', component:RevisionComponent},
  {path: 'checkEdit/:id', component:RevisionEditarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
