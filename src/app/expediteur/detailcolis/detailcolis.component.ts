import { Component } from '@angular/core';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-detailcolis',
  templateUrl: './detailcolis.component.html',
  styleUrls: ['./detailcolis.component.css']
})
export class DetailcolisComponent {
  constructor(private ExpService: GestionLivraisonServiceService) {}
  ListEtat:any[]=[]
  id:number=14
  colis:any;

  ngOnInit(): void {
    this.getcolis()
    this.getetatcolis()
  }
  getetatcolis(){
      this.ExpService.getEtatscolis(this.id).subscribe(
      (data: any) => {
        this.ListEtat = data.etats_colis;
        console.log(this.ListEtat);
        
      },
      (error: any) => {
        console.error('Error fetching ListExpediteur:', error);
      }
    );
  }
  getcolis(){
    this.ExpService.getById("colis",this.id).subscribe(
      (data: any) => {
        this.colis = data;
        console.log(this.colis);
        
      },
      (error: any) => {
        console.error('Error fetching colis:', error);
      }
    );
  }
}
