import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Expediteur } from 'src/app/models/Expediteur';

@Component({
  selector: 'app-one-expediteur',
  templateUrl: './one-expediteur.component.html',
  styleUrls: ['./one-expediteur.component.css']
})
export class OneExpediteurComponent {
  @Input() expediteur!: Expediteur ;
  @Output() updateEvent = new EventEmitter<Expediteur>();
  @Output() deleteEvent = new EventEmitter<Expediteur>();
  modifier() {
    this.updateEvent.emit(this.expediteur);
  }
  supprumer() {
    this.deleteEvent.emit(this.expediteur);
  }
}
