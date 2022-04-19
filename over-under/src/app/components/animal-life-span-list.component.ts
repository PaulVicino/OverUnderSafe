// import { Component, OnInit } from '@angular/core';

// import { AnimalLifeSpan } from '../models/animal-life-span.model';
// import { AnimalLifeSpanService } from '../services/animal-life-span.service';

// @Component({
//   selector: 'app-animal-life-span-list',
//   template: `
//     <div class="col-md-6">
//       <h4>Animals List</h4>
//       <ul class="list-group">
//         <li
//           class="list-group-item"
//           *ngFor="let tutorial of Animals; let i = index"
//           [class.active]="i == currentIndex"
//         >
//           {{ tutorial.name }}
//         </li>
//       </ul>
//     </div>
//   `,
//   styles: [
//   ]
// })
// export class AnimalLifeSpanListComponent implements OnInit {

//   Animals?: AnimalLifeSpan[];
//   currentAnimal: AnimalLifeSpan = {};
//   currentIndex = -1;

//   constructor(private AnimalLifeSpanService: AnimalLifeSpanService) { }

//   ngOnInit(): void {
//     this.retrieveAnimalLifeSpans();
//   }

//   retrieveAnimalLifeSpans(): void {
//     this.AnimalLifeSpanService.getAll().subscribe({
//       next: (data) => {
//         this.Animals = data;
//         console.log(data);
//       },
//       error: (e) => console.error(e)
//     });
//   }

// }
