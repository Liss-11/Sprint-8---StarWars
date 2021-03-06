import { MiServicioService } from './../servicios/mi-servicio.service';
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router'; 
import { AutentificacionService } from '../servicios/autentificacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AutentificacionService,
    private miServicio: MiServicioService
  ) { }

  
  /* close: boolean; */

  loginForm: FormGroup;
  registerForm: FormGroup;
  
  messagelog: string;
  messagereg: string;
  returnUrl: string;
  usuarioexiste: boolean;
  
  //Formulario Registro

  @Input() activar: boolean;
  

  ngOnInit(): void {
    //formulario logIn
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', [
        Validators.required,
        Validators.minLength(8)]],
      repContrasena: ['', Validators.required]
    }
    ,{
      validator: this.passwordValidator
    });

    /* this.returnUrl = '/starships'; */
    this.authService.logout();
    this.usuarioexiste = false;
    
    
  }

  
  get log() { return this.loginForm.controls; }
  get registre() { return this.registerForm.controls; }

  //Custom Validator contraseñas

  passwordValidator(g: FormGroup): any {

    return g.get('contrasena')?.value === g.get('repContrasena')?.value
      ? null : { 'mismatch': true };

  }

  borrar() { 
    this.registerForm.setValue({ usuario: '', contrasena: '', repContrasena: '' });
    this.loginForm.setValue({ userid: '', password: '' });
    this.registerForm.markAsPristine();
    this.registerForm.markAsUntouched();
    this.registerForm.updateValueAndValidity();
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this.loginForm.updateValueAndValidity();
    
    if (this.activar) {
      this.activar = false;
      this.registerForm.valid;
      
    } else { 
      this.activar = true;
      this.loginForm.valid;
    }
    
  }
  
  login() {
    if (this.loginForm.invalid) {
      return;
    } 
   else{
        let nombre = this.log['userid'].value;
        let contrasena = this.log['password'].value;
        if (localStorage.getItem(nombre) !== null && contrasena == localStorage.getItem(nombre)) {
          
          this.authService.login(nombre);
          //activo i pulso el boton de guardar para que cierre el modal

          let buton = document.querySelector("#cerrarlog") as HTMLButtonElement;
          buton?.setAttribute("data-bs-dismiss", "modal");
          buton?.click();
          this.miServicio.clearInput();
          
        }
        else {
          this.messagelog = "Usuario o Contraseña incorrectos";
        }
      }
  }

  register() {

    if (this.registerForm.invalid) {

      
    } else {
      let nombre: string = this.registre['usuario'].value;
      let contrasena: string = this.registre['contrasena'].value
      //comprobar si el nombre ya esxiste, y si existe pedir otro

      if (localStorage.getItem(nombre) == null) {
        
        localStorage.setItem(nombre, contrasena);
        console.log('hola');
          this.usuarioexiste = false;
          this.messagereg = "Usuario GUARDADO con éxito";

          //Cerramos modal y borramos inputs
          let buton = document.querySelector("#cerrarreg") as HTMLButtonElement;
          buton?.setAttribute("data-bs-dismiss", "modal");
          buton?.click();
          this.miServicio.clearInput();
      
      } else {
        
          this.usuarioexiste = true;
          this.messagereg = "Este Usuario ya esiste, ecoge otro nombre";
       
        }
      
    }
    
  }

  
    
  }

  
