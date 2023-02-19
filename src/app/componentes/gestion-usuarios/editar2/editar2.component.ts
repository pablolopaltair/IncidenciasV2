import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

//Importación del Router
import { Router, ActivatedRoute } from '@angular/router';

//Importación de construcción de Formularios 
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar2',
  templateUrl: './editar2.component.html',
  styleUrls: ['./editar2.component.css']
})
export class Editar2Component implements OnInit {

   //Iniciamos con el Formulario de edición de incidencia
   public editForm: FormGroup
   incidenciaRef: any
   constructor(
     public incidenciaService: UsuarioService,
     public formBuilder: FormBuilder,
     public activeRoute: ActivatedRoute,
     public router: Router
   ) {
     //Añadimos los campos que vayamos a rellenar, y se inicializan en blanco
     this.editForm = this.formBuilder.group({
     id: [{value: '', disabled: true}],
     email:[{value: '', disabled: true}],
     roles:[{value: '', disabled: true}]
     }) }
 
 
     //Recuerda los datos de cada campo y los introduce por defecto en el formulario
   ngOnInit(): void {
     const id = this.activeRoute.snapshot.paramMap.get('id')
     this.incidenciaService.getUsuarioById(id).subscribe(res => {
       this.incidenciaRef = res;
       this.editForm = this.formBuilder.group({
         id :[this.incidenciaRef.id],
         email: [this.incidenciaRef.email],
         roles: [this.incidenciaRef.roles],
       })
     })
   }
 
   //Acción del botón de editar
   onSubmit() {
     const id = this.activeRoute.snapshot.paramMap.get('id')
     this.incidenciaService.updateUsuario(this.editForm.value, id)
     this.router.navigate(['users'])
   }

}
