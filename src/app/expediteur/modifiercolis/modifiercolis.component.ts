import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gouvernemant } from 'src/app/models/gouvernemant';
import { Ville } from 'src/app/models/villes';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-modifiercolis',
  templateUrl: './modifiercolis.component.html',
  styleUrls: ['./modifiercolis.component.css']
})
export class ModifiercolisComponent {

  colis: any = {}; 
  selectedGouvernorat: any;
  selectedville: any;
  gouvernemants: any[] = [];
  villes: any[] = [];
   colisId:number = this.route.snapshot.params['id'];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gestionLivraisonService: GestionLivraisonServiceService,
    private gv:Gouvernemant,private vl:Ville
  ) { }

  ngOnInit(): void {
    this.getcolisDetails(this.colisId);

    this.loadGouvernemants();
  

  }

  getcolisDetails(id: number): void {
    this.gestionLivraisonService.getById("colis",id).subscribe(
      (data) => {
        
        this.colis = data;
        const dateString = this.colis.date;
        const shortDateString = new Date(dateString).toISOString().slice(0, 16);
        console.log(shortDateString);
        this.selectedGouvernorat = this.gv.getGouvernoratIdByNom(this.colis.gouvernement );
        this.loadville()
        this.selectedville = this.colis.ville;
      },
      (error) => {
        console.error('Error fetching colis details:', error);
      }
    );
  }

  loadGouvernemants(): void {
    this.gouvernemants=this.gv.getGouvernerats();
  }

  loadville(){
    console.log(this.selectedGouvernorat)
    
    this.villes=this.vl.getVillesByGouvernement(this.selectedGouvernorat);
    
  }
  

  updatecolis(f:NgForm): void {
    if (f.valid) {
      this.gestionLivraisonService.update("colis",this.colisId,f.value).subscribe(
        (data) => {
          console.log('colis updated successfully:', data);
          this.router.navigate(['/colis']);
        },
        (error) => {
          console.error('Error updating colis:', error);
        }
      );
    } else {
    }
  }
}

