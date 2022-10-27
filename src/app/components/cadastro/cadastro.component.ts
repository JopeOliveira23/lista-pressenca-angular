import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup;
  name: any;

  constructor(
    private editar: EditarComponent,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id: [{ value: '', disable:true }],
      cadastro: [ null, Validators.required ]
    })
  
  }
 
  onClick(click: string, event: any) {

    console.log(event.value.cadastro);
    this.editar.inputCadastro = event.value.cadastro;

    
    let selector: any = document.querySelector('.alert')

      if (click === 'enviar'){
        //console.log (this.form.value);
        selector.classList.remove('hide');
        selector.classList.add('show');
        selector.classList.add('showAlert');
          setTimeout(() => {
            selector.classList.add('hide');
            selector.classList.removeClass('show');
            selector.classList.removeClass('showAlert');
          }, 3000);
      } 
      else {
        selector.classList.add('hide');
        selector.classList.removeClass('show');
        selector.classList.removeClass('showAlert');
      }
  }
}