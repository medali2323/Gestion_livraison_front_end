import { Component } from '@angular/core';
import { GestionLivraisonServiceService } from 'src/app/service/gestion-livraison-service.service';

@Component({
  selector: 'app-audepot',
  templateUrl: './audepot.component.html',
  styleUrls: ['./audepot.component.css']
})
export class AudepotComponent {
  ListColis: any[] = [];
  codeexp:number=1

  constructor(private ExpService: GestionLivraisonServiceService) {}

  ngOnInit(): void {
    this.ExpService.getcolisforexpparetat(this.codeexp,3).subscribe(
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