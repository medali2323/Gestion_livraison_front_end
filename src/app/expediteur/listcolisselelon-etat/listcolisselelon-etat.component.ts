import { Component, Input } from '@angular/core';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-listcolisselelon-etat',
  templateUrl: './listcolisselelon-etat.component.html',
  styleUrls: ['./listcolisselelon-etat.component.css']
})
export class ListcolisselelonEtatComponent {
  @Input() etat!: number ;
  @Input() exp!: number ;
  ListColis:any=[];
  constructor(private ExpService: GestionLivraisonServiceService) {}

  ngOnInit(): void {
    this.ExpService.getcolisforexpparetat(this.exp,this.etat).subscribe(
      (data: any) => {
        this.ListColis = data.result;
        console.log(this.ListColis);
        
      },
      (error: any) => {
        console.error('Error fetching ListColis:', error);
      }
    );
  }






}
