import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gouvernemant } from 'src/app/models/gouvernemant';
import { Ville } from 'src/app/models/villes';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-modifier-expediteur',
  templateUrl: './modifier-expediteur.component.html',
  styleUrls: ['./modifier-expediteur.component.css']
})
export class ModifierExpediteurComponent implements OnInit {
  expediteur: any = {}; 
  selectedGouvernorat: any;
  selectedville: any;
  nom_expediteur:any; 
  adresse:any;
  gouvernemants: any[] = [];
  villes: any[] = [];
   expediteurId:number = this.route.snapshot.params['id'];
   selectedModePaiement:number=0
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gestionLivraisonService: GestionLivraisonServiceService,
    private gv:Gouvernemant,private vl:Ville
  ) { }

  ngOnInit(): void {
    this.getExpediteurDetails(this.expediteurId);
      
    this.loadGouvernemants();
  }

  getExpediteurDetails(id: number): void {
    this.gestionLivraisonService.getById("expediteurs",id).subscribe(
      (data) => {
        console.log(this.expediteur);
        
        this.expediteur = data;
        this.selectedGouvernorat = this.gv.getGouvernoratIdByNom(this.expediteur.gouvernement );
        console.log(this.gv.getGouvernoratIdByNom(this.expediteur));
        this.loadville()
        this.selectedville = this.expediteur.ville;
        this.adresse=this.expediteur.adresse;
        this.nom_expediteur=this.expediteur.nom_expediteur;
      },
      (error) => {
        console.error('Error fetching expediteur details:', error);
      }
    );
  }

  loadGouvernemants(): void {
    this.gouvernemants=this.gv.getGouvernerats();
    console.log(this.gouvernemants);
  }

  loadville(){
    console.log(this.selectedGouvernorat)
    
    this.villes=this.vl.getVillesByGouvernement(this.selectedGouvernorat);
    console.log(this.villes);
    
  }
  

  updateExpediteur(f:NgForm): void {
    console.log('Expediteur updated successfully:', f.value);
    
      this.gestionLivraisonService.update("expediteurs",this.expediteurId,f.value).subscribe(
        (data) => {
          console.log('Expediteur updated successfully:', data);
          this.router.navigate(['/expediteurs']);
        },
        (error) => {
          console.error('Error updating expediteur:', error);
        }
      );
    
  }
}
