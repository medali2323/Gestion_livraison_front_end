import { Component } from '@angular/core';
import { Expediteur } from 'src/app/models/Expediteur';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-detail-expediteur',
  templateUrl: './detail-expediteur.component.html',
  styleUrls: ['./detail-expediteur.component.css']
})
export class DetailExpediteurComponent {

  expediteur!: Expediteur;

  constructor(private expediteurService: GestionLivraisonServiceService) { }

  ngOnInit(): void {
    this.getExpediteurDetail(1)
  }

  getExpediteurDetail(id: number): void {
    this.expediteurService.getById("expediteur",id).subscribe(data => this.expediteur = data);
  }
}
