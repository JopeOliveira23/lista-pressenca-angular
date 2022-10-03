import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro!: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  const form = document.querySelector("#some-form") as HTMLAnchorElement;
  form.addEventListener('click', () => {
      console.log('oi'),
    );
  
}
