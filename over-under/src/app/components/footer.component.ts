import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer has-background-dark">
      <div class="container content has-text-centered">
        <p class="has-text-white"> Made by Paul Vicino </p>
        <img class="img-responsive" src="assets/images/Grad_Face_Pic.jpg" width="100px">
      </div>
    </footer> 
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
