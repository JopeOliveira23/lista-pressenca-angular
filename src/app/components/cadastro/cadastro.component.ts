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

 
  onClick(event: string) {
    let enviar: any = document.querySelector('.bg-modal');
    let fadeOut: any = document.getElementsByClassName("bg-modal");
    let timer = undefined;

    if (event === 'enviar'){

      enviar.style.display = 'flex';
      
      timer = setTimeout( () => {
        fadeOut[0].classList.add("fade-out");

        setTimeout(() => { 
          enviar.style.display = 'none';
          fadeOut[0].classList.remove("fade-out");}, 1000);

      }, 3000);
    } 
    
    else {
      (event === 'close');
      clearTimeout(timer);
      enviar.style.display = 'none';

    }

    
  }
}