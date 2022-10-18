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

    if (click === 'open'){
      sideBar.style.width = "250px";

      //document.body.style.background = "rgba(0,0,0,0.4)";
      //document.body.style.opacity = "0.5";
    }

    else {
      sideBar.style.width = "0";

      //document.body.style.background = "rgb(22, 22, 22)";
      //document.body.style.opacity = "1";
    }

  }

}