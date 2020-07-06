import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-hello-world',
  templateUrl: './exercice-hello-world.component.html',
  styleUrls: ['./exercice-hello-world.component.css']
})
export class ExerciceHelloWorldComponent implements OnInit {

  prenom = 'Romain';

  constructor() { }

  ngOnInit(): void {
  }

}
