import { Component } from '@angular/core';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  ListColis: any[] = [];

  constructor(private ExpService: GestionLivraisonServiceService) {}

  ngOnInit(): void {
    this.ExpService.all_with_etat().subscribe(
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