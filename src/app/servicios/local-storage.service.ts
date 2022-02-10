import { ILogin } from './../interfaces/login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private login: ILogin) { }

}
