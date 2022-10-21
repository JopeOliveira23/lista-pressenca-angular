import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  items: Array<any> = [];
  cadastro!: FormGroup;
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      cadastro: [ null, Validators.required ]
    })

    let names: any = document.getElementById('name');
    names! = this.items;
    console.log (this.form.value);

    this.items = [
      
      {name:'Caio'},
      {name:'Rafael'},
      {name:'Igor'},
      {name:'João'} 
    
    ];

  }
}
