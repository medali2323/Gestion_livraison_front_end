import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Gouvernemant } from 'src/app/models/gouvernemant';
import { Ville } from 'src/app/models/villes';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-ajouter-expediteur',
  templateUrl: './ajouter-expediteur.component.html',
  styleUrls: ['./ajouter-expediteur.component.css']
})
export class AjouterExpediteurComponent {
  public gouvernemants: any[]=[]; 
  public villes: any[]=[]; 
  selectedGouvernorat!: number;
  selectedville!:string;
  selectedModePaiement: string="ESPECE";
  // Other variables or services you may need

    // Initialize the form model

  constructor(private GestlivService: GestionLivraisonServiceService,private gv:Gouvernemant,private vl:Ville,private fb: FormBuilder) {
   
  }
ngOnInit(): void {
  this.gouvernemants=this.gv.getGouvernerats();
  console.log(this.gouvernemants);
  
}

loadville(){
  console.log(this.selectedGouvernorat)
  
  this.villes=this.vl.getVillesByGouvernement(this.selectedGouvernorat);
  console.log(this.villes);
  
}



  save(f:NgForm){
    console.log(f.value);
    f.value.gouvernement=this.gv.getNOMByGouvernement( parseInt(f.value.gouvernement))
    let user={
      username:f.value.nom_expediteur,
      email:f.value.email,
      password:f.value.num_tel_expediteur,
      password2:f.value.num_tel_expediteur
    }
    this.GestlivService.register(user).subscribe(
      (response:any) => {
        
        console.log('Données envoyées avec succès', response);
        this.GestlivService.create("expediteurs",f.value).subscribe(
          (response:any) => {
    
            console.log('Données envoyées avec succès', response);
            
            
           
          },
          (error:any) => {
            console.error('Erreur lors de l\'envoi des  colis', error);
          }
        );
        
       
      },
      (error:any) => {
        console.error('Erreur lors de l\'envoi des  colis', error);
      }
    );
  
 }
 
}
