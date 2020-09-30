import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  

  constructor() { }

  getCursos () {

    return ['JAva', 'Ext Js', 'Angular']

  }

}
