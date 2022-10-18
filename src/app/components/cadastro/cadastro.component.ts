import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro!: FormGroup;
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cadastro: [ null, Validators.required ]
    })
  
  }

 
  onClick(click: string) {
    let selector: any = document.querySelector('.alert')

      if (click === 'enviar'){
        console.log (this.form.value);
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