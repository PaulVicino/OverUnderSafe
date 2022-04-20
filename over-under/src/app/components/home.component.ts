import { Component, OnInit } from '@angular/core';

import { AnimalLifeSpan } from '../models/animal-life-span.model';
import { AnimalLifeSpanService } from '../services/animal-life-span.service';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">

      <br>
      <br>
      <p class="has-text-centered" style="font-size:5vw"> Guess if ??? is greater than or less than {{this.Animals[indexes[8]].lifespan}}. </p>

      <div class="hero-body has-text-centered" layout="row">
        <div class="column">
          <figure class="image is-256x256 is-inline-block">
            <img *ngIf="this.Animals[indexes[8]].imagePath != undefined" src= {{this.Animals[indexes[8]].imagePath}} width="256" height="256">
          </figure>
          <p style="font-size:2vw" *ngIf="this.Animals[indexes[8]].name != undefined"> {{this.Animals[indexes[8]].name}} </p>
          <p style="font-size:2vw" *ngIf="this.Animals[indexes[8]].lifespan != undefined"> Average Lifespan: {{this.Animals[indexes[8]].lifespan}} </p>
        </div>

        <div class="column" layout="column">
          <div>

            <h1 class="title" style="font-size:3vw">
                Max Score: 
                <br>
                {{maxScore}}
              </h1>

              <br>

            <h1 class="title" style="font-size:3vw">
              Score: 
              <br>
              {{score}}
            </h1>

              <br>

          </div>

          <div>
            <button class="button is-large is-responsive is-outlined" (click)="onOverGuess()">
              <span class="icon">
                <i class="fa fa-arrow-up"></i>
              </span>
            </button>
          </div>

          <div>
            <button class="button is-large is-responsive is-outlined" (click)="onUnderGuess()">
              <span class="icon">
                <i class="fa fa-arrow-down"></i>
              </span>
            </button>
          </div>
        </div>

        <div class="column">
          <figure class="image is-256x256 is-inline-block">
            <img *ngIf="this.Animals[indexes[9]].imagePath != undefined" src= {{this.Animals[indexes[9]].imagePath}} width="256" height="256">
          </figure>
          <p style="font-size:2vw" *ngIf="this.Animals[indexes[9]].name != undefined"> {{this.Animals[indexes[9]].name}} </p>
          <p style="font-size:2vw"> Average Lifespan: ??? </p>
        </div>

      </div>
    </section>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  Animals: AnimalLifeSpan[] = [{}];
  score = 0;
  maxScore: Number = 0;
  indexes: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  onOverGuess() {

    var num1 = this.Animals[this.indexes[9]].lifespan;
    var num2 = this.Animals[this.indexes[8]].lifespan;

    if (num1 != undefined && num2 != undefined)
    {
      if (num1 > num2)
      {
        this.score = this.score + 1;

        if (this.score >= this.maxScore)
        {
          const maxScoreValue:Number = this.score;
          localStorage.setItem('maxScore', JSON.stringify(maxScoreValue));
          this.maxScore = this.score;
        }
      }
      else
        this.score = 0;
    }
    

    // load new newNumber, and set old newNumber to oldNumber
    for (let i = 0; i < 9; i++)
    {
      this.indexes[i] = this.indexes[i + 1];
    }

    this.indexes[9] = Math.floor(Math.random() * 125);
    while (this.Animals[this.indexes[9]].lifespan == this.Animals[this.indexes[8]].lifespan ||
          this.indexes[9] == this.indexes[8] ||
          this.indexes[9] == this.indexes[7] || this.indexes[9] == this.indexes[6] || 
          this.indexes[9] == this.indexes[5] || this.indexes[9] == this.indexes[4] ||
          this.indexes[9] == this.indexes[3] || this.indexes[9] == this.indexes[2] ||
          this.indexes[9] == this.indexes[1] || this.indexes[9] == this.indexes[0])
      this.indexes[9] = Math.floor(Math.random() * 125);
  }

  onUnderGuess() {

    // this.Animals[this.indexes[9]].lifespan
    // look into ngIf

    var num1 = this.Animals[this.indexes[9]].lifespan;
    var num2 = this.Animals[this.indexes[8]].lifespan;

    if (num1 != undefined && num2 != undefined)
    {
      if (num1 < num2)
      {
        this.score = this.score + 1;

        if (this.score >= this.maxScore)
        {
          const maxScoreValue:Number = this.score;
          localStorage.setItem('maxScore', JSON.stringify(maxScoreValue));
          this.maxScore = this.score;
        }
      }
      else
        this.score = 0;
    }

    // load new newNumber, and set old newNumber to oldNumber
    for (let i = 0; i < 9; i++)
    {
      this.indexes[i] = this.indexes[i + 1];
    }

    this.indexes[9] = Math.floor(Math.random() * 125);
    while (this.Animals[this.indexes[9]].lifespan == this.Animals[this.indexes[8]].lifespan ||
          this.indexes[9] == this.indexes[8] ||
          this.indexes[9] == this.indexes[7] || this.indexes[9] == this.indexes[6] || 
          this.indexes[9] == this.indexes[5] || this.indexes[9] == this.indexes[4] ||
          this.indexes[9] == this.indexes[3] || this.indexes[9] == this.indexes[2] ||
          this.indexes[9] == this.indexes[1] || this.indexes[9] == this.indexes[0])
        this.indexes[9] = Math.floor(Math.random() * 125);
  }

  constructor(private AnimalLifeSpanService: AnimalLifeSpanService) { }

  ngOnInit(): void {
    this.retrieveAnimalLifeSpans();
    this.indexes[8] = Math.floor(Math.random() * 125);

    const maxScoreValue = localStorage.getItem("maxScore");
    if (maxScoreValue)
    {
      this.maxScore = JSON.parse(maxScoreValue);
    }
    
    this.indexes[9] = Math.floor(Math.random() * 125);
    while (this.indexes[9] == this.indexes[8] || this.Animals[this.indexes[9]].lifespan == this.Animals[this.indexes[8]].lifespan)
      this.indexes[9] = Math.floor(Math.random() * 125);
  }

  retrieveAnimalLifeSpans(): void {
    this.AnimalLifeSpanService.getAll().subscribe({
      next: (data) => {
        this.Animals = data;
        console.log(data);
        console.log("test");
      },
      error: (e) => console.error(e)
    });
  }

}
