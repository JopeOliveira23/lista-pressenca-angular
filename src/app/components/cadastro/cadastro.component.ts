import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro!: FormGroup;
  teste: string = '';
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cadastro: [ null, Validators.required ]
    })
  }

 
  onClick(): void {
    console.log(this.form.value.cadastro)
  }
  

}
