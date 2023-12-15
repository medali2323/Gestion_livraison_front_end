import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Gouvernemant } from 'src/app/models/gouvernemant';
import { Ville } from 'src/app/models/villes';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-addcolis',
  templateUrl: './addcolis.component.html',
  styleUrls: ['./addcolis.component.css']
})
export class AddcolisComponent implements OnInit{
  public gouvernemants: any[]=[]; 
  public villes: any[]=[]; 
  selectedGouvernorat!: number;
  selectedville!:string;
  selectedMode: number = 0;
  nb_article:number=1;
  modePaiement: string = 'espece'; 

    currentDate: string;

  constructor(private GestlivService: GestionLivraisonServiceService,private gv:Gouvernemant,private vl:Ville,    private router: Router,
    ) {
      this.currentDate = new Date().toISOString().slice(0, 16);
  }
ngOnInit(): void {
  this.gouvernemants=this.gv.getGouvernerats();
  console.log(this.gouvernemants);
  console.log(this.currentDate);
  
}
loadville(){
  console.log(this.selectedGouvernorat)
  
  this.villes=this.vl.getVillesByGouvernement(this.selectedGouvernorat);
  console.log(this.villes);
  
}



  save(f:NgForm){
    console.log(f.value);
    f.value.gouvernement=this.gv.getNOMByGouvernement( parseInt(f.value.gouvernement))
   const  data=f.value;
   data.expediteur=1;
   data.prix=parseFloat(data.prix)
   data.nb_article=parseInt(data.nb_article)
   data.tel_clt=String(data.tel_clt)
    console.log(data);
    data.mode_paiement="espece"
    this.GestlivService.create("colis",data).subscribe(
      (response:any) => {

        console.log('Données envoyées avec succès', response);
        const dataetatcolis={
          "date": response.date,
          "commentaire": "",
          "code_colis": response.code_colis,
          "code_etat": 1,
          "code_livreur": null
        }
        console.log(dataetatcolis);
        
        this.GestlivService.create("etatcolis",dataetatcolis).subscribe(
          (response1:any) => {
         
            console.log('Données envoyées avec succès etat colis', response1);
            this.router.navigate(['expediteur/colis']);

          },
          (error:any) => {
            console.error('Erreur lors de l\'envoi des données ETAT COLIS', error);
          }
        );
      },
      (error:any) => {
        console.error('Erreur lors de l\'envoi des  colis', error);
      }
    );
 }
 
}
