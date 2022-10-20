import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-presenca';
  

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(click: string) {
    let sideBar: any = document.getElementsByClassName("sidenav")[0]
    let body: any = document.body

      if (click === 'open'){
      body.classList.add('pelicula');
      sideBar.style.width = "250px";
      
      //body.style.background = "red";

      }
      else if (click === ''){
        body.classList.remove('pelicula');
        sideBar.style.width = "0";
      }

  }

  onClose(close: string) {
    let pelicula = document.getElementById("pelicula");

    pelicula!.onclick = function() {
      pelicula?.classList.toggle("active");}

  }
}